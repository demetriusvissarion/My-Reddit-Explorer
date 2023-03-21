import { Card } from "./Card";
import bigExplorer from "../img/bigExplorer.webp";
import "./Cards.css";
// import { useState } from "react";
import { selectAllCards } from "../store/cardsSlice";
import { useSelector } from "react-redux";

const randomNumber = Math.ceil(Math.random() * 10);
const initialCards = {};

const generateCard = (id) => ({
  id: id,
  display: true,
  animation: "display",
  channel: "r/interestingasfuck •Posted by u/JarethKingofGoblins",
  title: "AMC Theaters to Change Movie Ticket Prices Based on Seat Location",
  image: bigExplorer,
  commentNumber: 2100,
  voteNumber: 3200,
});

for (let step = 1; step < randomNumber; step++) {
  const newCard = generateCard(step);
  initialCards[newCard.id] = newCard;
}

export const Cards = () => {
  const cards = useSelector(selectAllCards);

  const cardToDisplay = () => {
    return Object.values(cards).filter((card) => card.display);
  };

  return (
    <div className="Cards">
      {cardToDisplay().map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};
