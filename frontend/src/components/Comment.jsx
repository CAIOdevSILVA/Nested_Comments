const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short"
})

const Comment = ({ id, message, user, createdAt }) => {
  return (
    <div className="comment">
      <div className="header">
        <span className="name">{user.name}</span>
        <span className="date">
          {dateFormatter.format(Date.parse(createdAt))}
        </span>
      </div>
      <div className="message">{message}</div>
      <div className="footer">
        
      </div>
    </div>
  )
}

export default Comment