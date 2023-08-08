import { getPosts } from "../services/posts"
import { Link } from "react-router-dom"
import { useAsync } from "../hooks/useAsync"

const PostList = () => {
  const { loading, error, value: posts } = useAsync(getPosts)

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1 className="error-msg">{error}</h1>

  return posts?.map((post) => (
    <h1 key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </h1>
  ))
}

export default PostList