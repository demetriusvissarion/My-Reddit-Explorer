import { Vote } from "./Vote";
import { CardFunction } from "./CardFunction";
import { CardContent } from "./CardContent";
import "./Card.css";

export const Card = ({ card, hideCard }) => {
  return (
    <div className={`Card ${card.animation}`}>
      <Vote voteNumber={card.voteNumber} />
      <CardContent
        cardId={card.id}
        channel={card.channel}
        title={card.title}
        image={card.image}
      />
      <CardFunction
        commentNumber={card.commentNumber}
        hideCard={hideCard}
        cardId={card.id}
      />
    </div>
  );
};
