import CommentsList from "./CommentsList"
import { usePost } from "../context/PostContext";

const Post = () => {
  const { post, rootComments } = usePost()

  return ( 
    <>
      <h1>
        {post.title}
      </h1>
      <article>{post.body}</article>
      <h3 className="comments-title">Comments</h3>
      <section>
        { rootComments !== null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentsList comments={rootComments}/>
          </div>
        )}
      </section>
    </>
  );
}
 
export default Post;