import Search from "../img/Search.svg";
import Explorer from "../img/Explorer.jpeg";
import Refresh from "../img/Refresh.svg";
import { SearchBar } from "./SearchBar";
import "./Header.css";

import { clearCards, fetchRedditPopular } from "../store/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchBarDisplay,
  setSearchBarDisplay,
} from "../store/searchSlice";

export const Header = () => {
  const searchBarDisplay = useSelector(selectSearchBarDisplay);

  const dispatch = useDispatch();

  const handleRefreshClick = (e) => {
    dispatch(clearCards());
    dispatch(fetchRedditPopular());
  };

  const handleSearchClick = (e) => {
    dispatch(setSearchBarDisplay());
  };

  return (
    <div className="Header">
      <img
        src={Refresh}
        onClick={handleRefreshClick}
        id="refreshIcon"
        alt="Refresh Icon"
      />
      {searchBarDisplay ? (
        <SearchBar />
      ) : (
        <div>
          <img src={Explorer} id="explorerIcon" alt="Explorer Icon" />
          <p id="title">MyReddit Explorer</p>
        </div>
      )}
      <img
        src={Search}
        onClick={handleSearchClick}
        id="searchIcon"
        alt="Search Icon"
      />
    </div>
  );
};
