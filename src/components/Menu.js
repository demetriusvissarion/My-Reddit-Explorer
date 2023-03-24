import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuDisplay } from "../store/searchSlice";
import { v4 as uuidv4 } from "uuid";
import { fetchRedditData } from "../store/cardsSlice";

const menuAnimation = (menuDisplay) => {
  if (menuDisplay) {
    return "slide-in";
  } else {
    return "slide-out";
  }
};

const initialMenuList = ["popular", "funny", "HumansBeingBros"];

export const Menu = () => {
  const menuDisplay = useSelector(selectMenuDisplay);
  const menuList = initialMenuList;
  const dispatch = useDispatch();

  return (
    <div id="slider" className={`Menu ${menuAnimation(menuDisplay)}`}>
      <p id="menuTitle">Subreddit</p>
      <div id="menuList">
        {menuList.map((topic) => (
          <p
            id="topic"
            key={uuidv4()}
            onClick={() => {
              dispatch(fetchRedditData(topic));
            }}
          >
            /r/{topic}
          </p>
        ))}
      </div>
    </div>
  );
};