import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToggle } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [SearchQuery, setSearchQuery] = useState("");
  console.log(SearchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSujection();
    }, 3000);
    return ()=>{
      clearTimeout(timer)
    }
  }, [SearchQuery]);

  //key i is press
  //render the component
  //useEffect called
  //start timer =>make api call 200ms

  // key ip is press after clear time if i press p before 200ms it will distroy old time
  //re-render the component
  //useEffect()
  // new start timer => make and api call after 200ms for that resion we have to clear time out
  const getSearchSujection = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(addToggle());
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-2xl border  border-gray-300">
      <div className="flex col-span-1 w-52">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBzKUdqe4CetMZnfMPRS1s3SK_A45pQdY0A&s"
          className="h-10 cursor-pointer"
          alt="Handberger"
          onClick={handleToggle}
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV66cQSWbNqoicprooUSsJSO1QDYlrcTEpuw&s"
          alt="Youtube"
          className="h-12 mx-2 "
        />
      </div>
      <div className="col-span-10 px-20">
        <input
          type="text"
          value={SearchQuery}
          placeholder="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 p-2 px-2  rounded-l-full border  border-black "
        />
        <button className="p-2 rounded-r-full border border-black">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s"
          alt="user-icon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
