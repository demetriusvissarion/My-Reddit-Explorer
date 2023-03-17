import Search from "../img/Search.svg";
import Explorer from "../img/Explorer.jpeg";
import Refresh from "../img/Refresh.svg";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <img src={Refresh} id="refreshIcon" />
      <img src={Explorer} id="explorerIcon" />
      <p id="title">My Reddit Explorer</p>
      <img src={Search} id="searchIcon" />
    </div>
  );
};
