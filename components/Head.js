import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer "
          src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png?f=webp&w=256"
          alt="hamburgerlogo"
        />
        <img
          className="h-6 mx-2 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-10 px-10 ">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-1 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-1 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute bg-white  py-2 px-2 w-[33.5rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-2 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlZkIqki43f4vMGa-DljqZBCOr6D6Cm_l_kDM06YEjL2QWlKZY_glSuSJGybsUIHmdpc&usqp=CAU"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
