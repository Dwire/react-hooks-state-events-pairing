import React from "react";
import VideoDetails from "./VideoDetails";
import Video from "./Video";



function VideoContainer({visibleComments, toggleComments, handleUpvote, handleDownvote,upvotes, downvotes, title, views, embedUrl, createdAt}) {
  return (
    <div>
      <Video embedUrl={embedUrl} />

      <VideoDetails 
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
        toggleComments={toggleComments}
        visibleComments={visibleComments}
        upvotes={upvotes} 
        downvotes={downvotes} 
        title={title} 
        views={views} 
        createdAt={createdAt} 
        />
    </div>
  )
}


export default VideoContainer