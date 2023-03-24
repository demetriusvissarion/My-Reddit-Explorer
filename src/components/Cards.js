import { Card } from ".//Card";
import "./Cards.css";
import { selectAllCards } from "../store/cardsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRedditPopular } from "../store/cardsSlice";
import { selectInputValue } from "../store/searchSlice";

export const Cards = () => {
  const cards = useSelector(selectAllCards);
  const inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  const cardToDisplay = () => {
    return Object.values(cards).filter(
      (card) =>
        card.display &
        card.title.toLowerCase().includes(inputValue.toLowerCase())
    );
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
    return (
      <div id="loading">
        <p>Loading...</p>
      </div>
    );
  }
};
