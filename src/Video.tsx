import React, { useEffect, useState } from "react";

export default function Video({ video }) {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${video.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items[0]);
        setChannel(data.items[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="max-w-[27%] w-full min-w-[300px] flex flex-col mx-[8px] mb-[40px]">
      <img
        src={video.snippet.thumbnails.maxres.url}
        alt=""
        className="max-w-[360px] w-full rounded-[12px]"
      />
      <div className="flex items-start">
        <img
          src={channel.snippet && channel.snippet.thumbnails.high.url}
          alt=""
          className="w-[48px] mt-[12px] mr-[12px] rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="line-clamp-2 mt-[12px] mb-[4px]">
            {video.snippet.title}
          </h3>
          <a href="" className="line-clamp-1">
            {channel.snippet && channel.snippet.title}
          </a>
          <div className="flex">
            <p>10K views</p>
            <p className="before:content-['•'] before:mx-[4px]">4 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
