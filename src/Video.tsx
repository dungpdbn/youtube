import React from "react";

export default function Video({video}) {
  return (
    <div className="max-w-[27%] w-full min-w-[300px] flex flex-col mx-[8px] mb-[40px]">
      <img
        src={video.snippet.thumbnails.maxres.url}
        alt=""
        className="max-w-[360px] w-full rounded-[12px]"
      />
      <div className="flex items-start">
        <img
          src="https://yt3.ggpht.com/ytc/AL5GRJWGnyS7RC2tFc0GupOnLgKcDrSm9f0Cghh3hjx6SA=s68-c-k-c0x00ffffff-no-rj"
          alt=""
          className="w-[48px] mt-[12px] mr-[12px]"
        />
        <div className="flex flex-col">
          <h3 className="line-clamp-2">
            {video.snippet.localized.title}
          </h3>
          <a href="" className="line-clamp-1">
            Tari10M
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
