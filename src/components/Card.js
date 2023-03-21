import { Vote } from "./Vote";
import { CardFunction } from "./CardFunction";
import { CardContent } from "./CardContent";
import "./Card.css";

export const Card = ({ card }) => {
  return (
    <div className={`Card ${card.animation}`}>
      <Vote voteNumber={card.voteNumber} />
      <CardContent
        channel={card.channel}
        title={card.title}
        image={card.image}
      />
      <CardFunction commentNumber={card.commentNumber} cardId={card.id} />
    </div>
  );
};
