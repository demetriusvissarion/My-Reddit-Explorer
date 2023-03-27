import Search from "../img/Search.svg";
import Explorer from "../img/Explorer.jpeg";
// import Refresh from "../img/Refresh.svg";
import Menu from "../img/Menu.svg";
import { SearchBar } from "./SearchBar";
import "./Header.css";

import { clearCards, fetchRedditData } from "../store/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchBarDisplay,
  setMenuDisplay,
  setSearchBarDisplay,
} from "../store/searchSlice";

export const Header = () => {
  const searchBarDisplay = useSelector(selectSearchBarDisplay);

  const dispatch = useDispatch();

  const handleRefreshClick = (e) => {
    dispatch(clearCards());
    dispatch(fetchRedditData());
  };

  const handleSearchClick = (e) => {
    dispatch(setSearchBarDisplay());
  };

  const handleMenuClick = (e) => {
    dispatch(setMenuDisplay());
  };

  return (
    <div className="Header">
      <img src={Menu} alt="menu" id="menuIcon" onClick={handleMenuClick} />
      {searchBarDisplay ? (
        <SearchBar />
      ) : (
        <div id="explorerIconContainer">
          <p onClick={handleRefreshClick} id="title">
            My Reddit Explorer
          </p>
          <img
            src={Explorer}
            alt="Explorer"
            onClick={handleRefreshClick}
            id="explorerIcon"
          />
        </div>
      )}
      <img
        src={Search}
        alt="search"
        onClick={handleSearchClick}
        id="searchIcon"
      />
    </div>
  );
};
