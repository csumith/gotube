import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToggle } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { addCache } from "../utils/searchSlice";

const Head = () => {
  const searchCache = useSelector((store) => store.caching);
  console.log("store", searchCache);
  const [SearchQuery, setSearchQuery] = useState("");
  const [sujection, setSujection] = useState();
  const [show, setShow] = useState(true);
  console.log(SearchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      //Dry run
      // searchCache:{
      // "iphone":["iphone12","iphone15","iphone16","iphone17"]
      //    }
      //searchQuery:"iphone"
      //If my searchCache(store) have a data of SearchQuery then setup data from store only
      if (searchCache[SearchQuery]) {
        setSujection(searchCache[SearchQuery]);
      } else {
        getSearchSujection();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [SearchQuery]);

  //key i is press
  //render the component
  //useEffect called
  //start timer =>make api call 200ms

  // key ip is press after clear time if i press p before 200ms it will distroy old time(it will  called  return inside useEffect when it destroy time)
  //re-render the component
  //useEffect()
  //  start timer => make and api call after 200ms for that resion we have to clear time out
  const getSearchSujection = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + SearchQuery);
    const json = await data.json();

    setSujection(json[1]);
    console.log("sujection", sujection);
    dispatch(
      addCache({
        [SearchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(addToggle());
  };

  return (
    <div className="grid grid-flow-col p-2 m-1 shadow-sm ">
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
          className="w-1/2 p-2 px-4  rounded-l-full border  border-black "
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
        <button className="p-2 rounded-r-full border border-black">
          Search
        </button>
        {show && (
          <div className="absolute bg-white py-2 px-2 rounded-lg text-black w-[375px] z-10 shadow-sm">
            <ul>
              {sujection &&
                sujection.map((sujection) => {
                  return (
                    <li
                      className="py-2  px-3 shadow-sm hover:bg-gray-100"
                      key={sujection}
                    >
                      {sujection}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
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
