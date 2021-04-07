import React from "react";



function Video({embedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"}) {
  console.log("embedUrl", embedUrl)

  return (
      <iframe
      width="919"
      height="525"
      src={embedUrl}
      frameborder="0"
      allowfullscreen
      title="Thinking in React"
    />
  )
}


export default Video