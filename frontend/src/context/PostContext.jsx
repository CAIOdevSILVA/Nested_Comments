import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useAsync } from "../hooks/useAsync"
import { getPost } from "../services/posts"
import { useParams } from "react-router-dom"

const Context = createContext()

export function usePost(){
  return useContext(Context)
}

const PostProvider = ({ children }) => {
  const { id } = useParams();
  const { error, loading, value:post } = useAsync(() => getPost(id), [id]);
  const [comments, setComments] = useState([])

  const commentsByParentsId = useMemo(() => {
    if(comments == null) return []
    const group = {};

    comments.forEach((comment) => {
      group[comment.parentId] ||= []//verifica se o parentId tem um key no objeto group
      group[comment.parentId].push(comment)//Adiciona o comentário filho em uma key específica referente ao comentário pai. 
    });

    return group;
  }, [comments])

  useEffect(() => {
    if (post?.comments == null) return
    setComments(post.comments)
  }, [post?.comments])

  const getReplies = (parentId) => {
    return commentsByParentsId[parentId]
  }

  function createLocalComment(comment) {
    setComments(prevComments => {
      return [comment, ...prevComments]
    })
  }

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1 className="error-msg">{error}</h1>

  return (
    <Context.Provider value={{
      post: { id, ...post },
      rootComments: commentsByParentsId[null],
      getReplies,
      createLocalComment
    }}>
      {children}
    </Context.Provider>
  )
}

export default PostProvider