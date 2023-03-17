import Search from "../../img/Search.svg";
import Explorer from "../img/explorer.jpeg";
import Refresh from "../../img/Refresh.svg";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <img src={Refresh} id="refreshIcon" alt="refreshIcon" />
      <img src={Explorer} id="explorerIcon" alt="explorerIcon" />
      <p>My Reddit Explorer</p>
      <img src={Search} id="searchIcon" alt="searchIcon" />
    </div>
  );
};
