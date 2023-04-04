import React from "react";

function Subscription({title, image, newItem}) {
  return (
    <div className="flex w-[204px] rounded-[10px] items-center h-[40px] px-[12px]">
      <img
        src={image}
        alt=""
        className="w-[24px] h-[24px] rounded-full mr-[24px]"
      />
      <button className="flex-auto text-left truncate">{title}</button>
      <div
        id="newness-dot"
        className="ytd-guide-entry-renderer w-[4px] h-[4px] mx-[6px] rounded-full bg-[#065fd4] flex-none"
        style={{display: newItem ? "block" : "none"}}
      ></div>
    </div>
  );
}

export default Subscription;
