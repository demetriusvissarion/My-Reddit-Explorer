import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from ".//Card";
import { selectAllCards } from "../store/cardsSlice";
import { fetchRedditData } from "../store/cardsSlice";
import { selectInputValue, selectScreenHeight } from "../store/searchSlice";
import "./Cards.css";

export const Cards = () => {
  const cards = useSelector(selectAllCards);
  const inputValue = useSelector(selectInputValue);
  const displayHeight = useSelector(selectScreenHeight);
  const dispatch = useDispatch();

  const cardToDisplay = () => {
    return Object.values(cards).filter(
      (card) =>
        card.display &
        card.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchRedditData());
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
      <div
        id="loading"
        className="Cards"
        style={{ height: displayHeight - 144 }}
      >
        <p>Loading...</p>
      </div>
    );
  }
};
