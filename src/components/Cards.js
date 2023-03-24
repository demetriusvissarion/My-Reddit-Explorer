import { Card } from ".//Card";
import "./Cards.css";
import { selectAllCards } from "../store/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRedditPopular } from "../store/cardsSlice";

export const Cards = () => {
  const cards = useSelector(selectAllCards);
  const dispatch = useDispatch();

  const cardToDisplay = () => {
    return Object.values(cards).filter((card) => card.display);
  };

  useEffect(() => {
    dispatch(fetchRedditPopular());
  }, [dispatch]);

  if (Object.keys(cards).length !== 0) {
    return (
      <div className="Cards">
        {cardToDisplay().map((card) => (
          <Card cardId={card.id} key={card.id} />
        ))}
      </div>
    );
  } else {
    console.log(cards);
    return (
      <div id="loading">
        <p>Loading...</p>
      </div>
    );
  }
};
