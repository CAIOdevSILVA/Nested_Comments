import { useState } from "react"

const CommentForm = ({ loading, error, autoFocus = false, onSubmit, initialValue = "" }) => {
  const [message, setMessage] = useState(initialValue)

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(message).then(() => setMessage(""))
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="comment-form-row">
          <textarea 
            autoFocus={autoFocus}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
          />
          <button
            className="btn"
            type="submit"
            disabled={loading}
          >
            { loading ? "Loading" :  "Post"}
          </button>
        </div>
        <div className="error-msg">{error}</div>
      </form>
    </>
  )
}

export default CommentForm