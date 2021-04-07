import React from "react";




function VideoDetails({toggleComments,handleUpvote, handleDownvote, visibleComments, upvotes, downvotes, title, views, createdAt}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt} </p>
      <div>
        <button onClick={handleUpvote}>{upvotes} 👍</button>
        <button onClick={handleDownvote}>{downvotes} 👎</button>
      </div>
      <button onClick={toggleComments} >{visibleComments ? "Hide Comments": "Show Comments"}</button>
    </div>
  )
}


export default VideoDetails