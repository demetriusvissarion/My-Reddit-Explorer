import Up from "../img/Up.svg";
import Down from "../img/Down.svg";
import { useSelector } from "react-redux";
import { nFormatter } from "../util/numberTransform";

export const Vote = ({ cardId }) => {
  const card = useSelector((state) => state.cards.cards[cardId]);

  return (
    <div>
      <img src={Up} className="UpIcon" alt="Up Icon" />
      <img src={Down} className="DownIcon" alt="Down Icon" />
      <p className="Vote">{nFormatter(card.voteNumber, 1)}</p>
    </div>
  );
};
