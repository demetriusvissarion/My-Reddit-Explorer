import Search from "../img/Search.svg";
import Explorer from "../img/Explorer.jpeg";
import Refresh from "../img/Refresh.svg";
import { SearchBar } from "./SearchBar";
import "./Header.css";
import { useState } from "react";

export const Header = () => {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);

  return (
    <div className="Header">
      <img
        src={Refresh}
        onClick={() => window.location.reload(false)}
        id="refreshIcon"
        alt="Refresh Icon"
      />
      {searchBarDisplay ? (
        <SearchBar />
      ) : (
        <div>
          <img src={Explorer} id="explorerIcon" alt="Explorer Icon" />
          <p id="title">My Reddit Explorer</p>
        </div>
      )}
      <img
        src={Search}
        onClick={() => setSearchBarDisplay(!searchBarDisplay)}
        id="searchIcon"
        alt="Search Icon"
      />
    </div>
  );
};
