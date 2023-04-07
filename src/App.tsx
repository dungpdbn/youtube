import { useState, useEffect } from "react";
import menuBar from "./assets/menu-bar.png";
import youtubeLogo from "./assets/YouTube-Logo-PNG7.png";
import jwt_decode from "jwt-decode";
import "./App.css";
import Subscription from "./Subscription";
import { ReactComponent as Shorts } from "./assets/shorts.svg";
import { ReactComponent as Subscriptions } from "./assets/subscriptions.svg";
import { ReactComponent as Library } from "./assets/library.svg";
import { ReactComponent as History } from "./assets/history.svg";
import { ReactComponent as WatchLater } from "./assets/watchLater.svg";
import { ReactComponent as SignIn } from "./assets/signIn.svg";
import { ReactComponent as Home } from "./assets/home.svg";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import Video from "./Video";
const apiKey = "AIzaSyC3eMtziQLUNNR2fvlHpyvhqG4-FjRL_0Q";
let client;
function App() {
  const [token, setToken] = useState("");
  const [subscriptions, setSubscriptions] = useState([]);
  const [url, setUrl] = useState("");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    client = google.accounts.oauth2.initTokenClient({
      client_id:
        "324193625755-2e0j68au5ujoqasn56f0qvmt2saac50r.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/youtube  profile",
      callback: (tokenResponse) => {
        setToken(tokenResponse.access_token);
        if (tokenResponse.access_token) {
          fetch(
            `https://people.googleapis.com/v1/people/me?personFields=photos&access_token=${tokenResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                Accept: "application/json",
              },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setUrl(data.photos[0].url);
            })
            .catch((error) => console.error(error));
          fetch(
            `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=7&mine=true&key=${apiKey}`,
            {
              headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                Accept: "application/json",
              },
            }
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setSubscriptions(data.items);
            })
            .catch((error) => console.error(error));
        }
      },
    });
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=VN&key=${apiKey}`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
      .catch((error) => console.error(error));
  }, []);
  function getToken() {
    client.requestAccessToken();
  }
  function revokeToken() {
    google.accounts.oauth2.revoke(token, () => {
      console.log("access token revoked");
      console.log(token);
    });
  }
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
          {url ? (
            <button>
              <img
                src={url}
                alt=""
                className="h-[32px] w-[32px] rounded-full"
              />
            </button>
          ) : (
            <a
              id="signIn"
              className="hover:bg-[#def1ff] cursor-pointer flex items-center justify-center px-[15px] border h-[36px] text-[#065fd4] rounded-[18px]"
              onClick={() => {
                getToken();
              }}
            >
              <SignIn className="h-[24px] w-[24px] mr-[6px] ml-[-6px] text-[#065fd4]" />
              <span className="">Sign in</span>
            </a>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col p-[12px]">
          <div className="flex w-[204px] rounded-[10px] items-center h-[40px] hover:bg-[#0000000d] px-[12px]">
            <Home className="h-[24px] w-[24px] mr-[24px]" />
            <button className="flex-auto text-left">Home</button>
          </div>
          <div className="flex w-[204px] rounded-[10px] items-center h-[40px] hover:bg-[#0000000d] px-[12px]">
            <Shorts className="h-[24px] w-[24px] mr-[24px]" />
            <button className="flex-auto text-left">Shorts</button>
          </div>
          <div className="flex w-[204px] rounded-[10px] items-center h-[40px] hover:bg-[#0000000d] px-[12px]">
            <Subscriptions className="h-[24px] w-[24px] mr-[24px]" />
            <button className="flex-auto text-left">Subscriptions</button>
          </div>
          <div className="border-t mt-[12px] pt-[12px]">
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] hover:bg-[#0000000d] px-[12px]">
              <Library className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left">Library</button>
            </div>
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] hover:bg-[#0000000d] px-[12px]">
              <History className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left">History</button>
            </div>
            <div className="flex w-[204px] rounded-[10px] items-center h-[40px] hover:bg-[#0000000d] px-[12px]">
              <WatchLater className="h-[24px] w-[24px] mr-[24px]" />
              <button className="flex-auto text-left ">Watch later</button>
            </div>
          </div>
          <div className="border-t mt-[12px] pt-[12px] flex flex-col">
            <h3 className="px-[12px] pt-[6px] pb-[4px]">Subscriptions</h3>
            {subscriptions.length > 0 ? (
              subscriptions.map((subscription) => (
                <Subscription
                  key={subscription.id}
                  title={subscription.snippet.title}
                  image={subscription.snippet.thumbnails.high.url}
                  newItem={subscription.contentDetails.newItemCount}
                />
              ))
            ) : (
              <a
                id="signIn"
                className="hover:bg-[#def1ff] cursor-pointer flex items-center justify-center px-[15px] border h-[36px] text-[#065fd4] rounded-[18px] self-center"
                onClick={() => {
                  getToken();
                }}
              >
                <SignIn className="h-[24px] w-[24px] mr-[6px] ml-[-6px] text-[#065fd4]" />
                <span className="">Sign in</span>
              </a>
            )}
          </div>
        </div>
        <div className="flex-auto flex-wrap flex mt-[20px]">
          {videos &&
            videos.map((video) => <Video video={video} key={video.id} />)}
        </div>
      </div>
    </>
  );
}

export default App;
