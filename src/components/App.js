import {useState} from "react";
import video from "../data/video.js";

import VideoContainer from './VideoContainer'
import CommentList from './CommentList'

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvotes] = useState(video.downvotes)
  const [visibleComments, setVisibleComments] = useState(false)

  const {title, views, embedUrl, createdAt, comments} = video
  
  const toggleComments = () => {
    setVisibleComments(prevState => !prevState)
  }

  const handleUpvote = () => {
    setUpvotes(prevState => prevState + 1)
  }

  const handleDownvote = () => {
    setDownvotes(prevState => prevState + 1)
  }

  return (
    <div className="App">
     <VideoContainer 
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
        toggleComments={toggleComments}
        visibleComments={visibleComments}
        upvotes={upvotes} 
        downvotes={downvotes} 
        title={title} 
        views={views}
        embedUrl={embedUrl}
        createdAt={createdAt}
      />

     {visibleComments && <CommentList comments={comments} />}
    </div>
  );
}

export default App;
