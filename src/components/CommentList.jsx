import React from "react";
import Comment from "./Comment";



function CommentList({comments}) {
  const commentCards = comments.map(comment => {
    return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
  })

  return (
    <div>
      <h2>{comments.length} comments</h2>
      {commentCards}
    </div>
  )
}


export default CommentList