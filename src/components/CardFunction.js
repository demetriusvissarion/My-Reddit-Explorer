import { useDispatch } from "react-redux";
import Comment from "../img/Comment.svg";
import Hide from "../img/Hide.svg";
import { setAnimationHide, setDisplayFalse } from "../store/cardsSlice";
import { useSelector } from "react-redux";

const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const CardFunction = ({ cardId }) => {
  const card = useSelector((state) => state.cards.cards[cardId]);
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(setAnimationHide(cardId));
    await sleep(500);
    dispatch(setDisplayFalse(cardId));
  };

  return (
    <div className="CardFunction">
      <img src={Comment} id="commentIcon" alt="Comment Icon" />
      <p className="Comment">{card.commentNumber} comments</p>
      <img src={Hide} onClick={handleClick} id="hideIcon" alt="Hide Icon" />
    </div>
  );
};
