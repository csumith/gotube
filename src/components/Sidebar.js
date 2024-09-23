import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg  w-52 border bg-black text-white  border-black z-10">
      <ul>
        <li className="flex">
          <button>
            <FaHome />
          </button>
          <button className="mx-1">
            <NavLink to="/"> Home </NavLink>
          </button>
        </li>
        <li className="flex">
          <button>
            <SiYoutubeshorts />
          </button>
          <button className="mx-1">Short</button>
        </li>
        <li className="flex">
          <button>
            <BiSolidVideos />
          </button>
          <button className="mx-1">Videos</button>
        </li>
        <li className="flex">
          <button>
            <MdLiveTv />
          </button>
          <button className="mx-1">Videos</button>
        </li>
      </ul>

      <h1 className="font-bold pt-3">Watch</h1>
      <ul>
        <li>Serial</li>
        <li>Colors</li>
        <li>Mtv Rodies</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-3">Popular</h1>
      <ul>
        <li>News</li>
        <li>Cricket</li>
        <li>Gaming</li>
        <li>Whether</li>
      </ul>

      <h1 className="font-bold pt-3">Games</h1>
      <ul>
        <li>Batman</li>
        <li>Pubji</li>
        <li>SpiderMan</li>
        <li>Rummy</li>
      </ul>

      <h1 className="font-bold pt-3">Watch</h1>
      <ul>
        <li>Serial</li>
        <li>Colors</li>
        <li>Mtv Rodies</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-3">Watch</h1>
      <ul>
        <li>Serial</li>
        <li>Colors</li>
        <li>Mtv Rodies</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-3">Popular</h1>
      <ul>
        <li>News</li>
        <li>Cricket</li>
        <li>Gaming</li>
        <li>Whether</li>
      </ul>

      <h1 className="font-bold pt-3">Games</h1>
      <ul>
        <li>Batman</li>
        <li>Pubji</li>
        <li>SpiderMan</li>
        <li>Rummy</li>
      </ul>

      <h1 className="font-bold pt-3">Watch</h1>
      <ul>
        <li>Serial</li>
        <li>Colors</li>
        <li>Mtv Rodies</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-3">Watch</h1>
      <ul>
        <li>Serial</li>
        <li>Colors</li>
        <li>Mtv Rodies</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-3">Popular</h1>
      <ul>
        <li>News</li>
        <li>Cricket</li>
        <li>Gaming</li>
        <li>Whether</li>
      </ul>

      <h1 className="font-bold pt-3">Games</h1>
      <ul>
        <li>Batman</li>
        <li>Pubji</li>
        <li>SpiderMan</li>
        <li>Rummy</li>
      </ul>

      <h1 className="font-bold pt-3">Watch</h1>
      <ul>
        <li>Serial</li>
        <li>Colors</li>
        <li>Mtv Rodies</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
