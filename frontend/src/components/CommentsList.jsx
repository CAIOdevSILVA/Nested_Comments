import Comment from "./Comment"

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id} className="comment-stack">
      <Comment {...comment}/>
    </div>
  ))
}

export default CommentsList