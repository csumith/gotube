import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoContainer from "./VideoContainer";
import CommentsContainer from "./CommentsContainer";

const Watch = () => {
  const [searchParms] = useSearchParams();

  let id = searchParms.get("v");
  console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col ">
      <div className="px-4 mt-6">
        <iframe
          className="rounded-lg"
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default Watch;
