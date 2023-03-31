import { useState, useEffect } from "react";
import { google } from 'googleapis';
import menuBar from "./assets/menu-bar.png";
import youtubeLogo from "./assets/YouTube-Logo-PNG7.png";
import "./App.css";
import { ReactComponent as Shorts } from "./assets/shorts.svg";
import { ReactComponent as Subscriptions } from "./assets/subscriptions.svg";
import { ReactComponent as Library } from "./assets/library.svg";
import { ReactComponent as History } from "./assets/history.svg";
import { ReactComponent as WatchLater } from "./assets/watchLater.svg";
import { ReactComponent as SignIn } from "./assets/signIn.svg";
const API = 'AIzaSyC3eMtziQLUNNR2fvlHpyvhqG4-FjRL_0Q';
const channelId = 'UCxr2u-kD8QYntD9WzC_7QXg';
let fetchUrl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(fetchUrl).then((response) => response.json()).then((resJson) => {
      console.log(resJson);
    });
    
  }, [])
  return (
    <>
      <div className="flex h-[56px] px-[16px] justify-between">
        <div className="flex items-center">
          <img src={menuBar} className="max-h-[29px] m-[8px] " />
          <img src={youtubeLogo} className="max-h-[56px] m-[14px]" />
        </div>
        <div className="flex items-center flex-[0_1_536px]">
          <form className="flex flex-auto items-center h-[40px] border border-solid pl-6 border-[#ccc] border-r-0 rounded-tl-[40px] rounded-bl-[40px]">
            <input className="focus:outline-none w-full" />
          </form>
          <button className="m-0 h-[40px] w-[64px] border border-solid border-[#d3d3d3] bg-[#f8f8f8] rounded-tr-[40px] rounded-br-[40px]">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="flex items-center">
          <button className="w-[40px] h-[40px] flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <a className="hover:bg-[#def1ff] cursor-pointer flex items-center justify-center px-[15px] border h-[36px] text-[#065fd4] rounded-[18px]">
            <SignIn className="h-[24px] w-[24px] mr-[6px] ml-[-6px] text-[#065fd4]"/>
            <span className="">Sign in</span>
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="px-[12px] pt-[12px]">
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] bg-[#0000000d] px-[12px]">
              <span className="material-symbols-outlined h-[24px] w-[24px] mr-[24px]">
                home
              </span>
              <button className="flex-auto text-left">Home</button>
            </div>
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] px-[12px]">
              <Shorts className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left">Shorts</button>
            </div>
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] px-[12px]">
              <Subscriptions className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left">Subscriptions</button>
            </div>
          </div>
          <div className="px-[12px] border-t mt-[12px] pt-[12px]">
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] bg-[#0000000d] px-[12px]">
              <Library className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left">Library</button>
            </div>
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] px-[12px]">
              <History className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left">History</button>
            </div>
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] px-[12px]">
              <WatchLater className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left ">Watch later</button>
            </div>
          </div>
        </div>
        <div className="flex-auto border"></div>
      </div>
    </>
  );
}

export default App;
