import { Vote } from "./Vote";
import { CardFunction } from "./CardFunction";
import { CardContent } from "./CardContent";
import "./Card.css";

export const Card = () => {
  return (
    <div className="Card">
      <Vote />
      <CardContent />
      <CardFunction />
    </div>
  );
};
