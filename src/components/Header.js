import Search from "../img/Search.svg";
import Explorer from "../img/Explorer.jpeg";
import Refresh from "../img/Refresh.svg";
import { SearchBar } from "./SearchBar";
import "./Header.css";
import { useState } from "react";
import { setNewCards } from "../store/cardsSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="Header">
      <img
        src={Refresh}
        onClick={() => dispatch(setNewCards())}
        id="refreshIcon"
        alt="Refresh Icon"
      />
      {searchBarDisplay ? (
        <SearchBar value={inputValue} setInputValue={setInputValue} />
      ) : (
        <div>
          <img src={Explorer} id="explorerIcon" alt="Explorer Icon" />
          <p id="title">My Redit Explorer</p>
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
