import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard, { AddVideo } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [Videos, setVideos] = useState();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    let data = await fetch(YOUTUBE_VIDEO_API);
    let json = await data.json();

    setVideos(json.items);
    console.log(Videos);
  };
  return (
    <div className="flex flex-wrap mx-4">
      {/* //HOC */}
      {Videos && <AddVideo info={Videos[0]} />}
      {Videos &&
        Videos.map((Videos) => (
          <Link key={Videos.id} to={"/watch?v=" + Videos.id}>
            <VideoCard info={Videos} />
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
