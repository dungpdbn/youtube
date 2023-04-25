import React from "react";

function Popular({ title, image, newItem }) {
  return (
    <div className="flex-auto flex-wrap flex mt-[20px]">
      {videos && videos.map((video) => <Video video={video} key={video.id} />)}
    </div>
  );
}

export default Subscription;
