import React from "react";

const VideoCard = ({ info }) => {
  console.log("info", info);
  //   const { snippet, statistics } = info;
  //   const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-44 mx-4 shadow-lg">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        className="w-18 rounded-lg"
        alt=""
      />
      <ul>
        <li className="font-bold py-2">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};


//advertise video with higherorder-component
export const AddVideo=({ info })=>{
  return(
    <div className="border border-red-600 p-1 m-1">
    {  <VideoCard info={info}/>}
    </div>
  )
}

export default VideoCard;
