import { Vote } from "./Vote";
import { CardFunction } from "./CardFunction";
import { CardContent } from "./CardContent";
import { Comment } from "./Comment";
import { useSelector } from "react-redux";
import "./Card.css";

export const Card = ({ cardId }) => {
  const card = useSelector((state) => state.cards.cards[cardId]);

  return (
    <div className={`Card ${card.animation}`}>
      <Vote cardId={cardId} />
      <CardContent cardId={card.id} />
      <CardFunction cardId={cardId} />
      <Comment cardId={cardId} />
    </div>
  );
};
