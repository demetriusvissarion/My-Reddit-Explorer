export const CardContent = ({ cardId, channel, title, image }) => {
  return (
    <div className="CardContent">
      <p className="Channel">{channel}</p>
      <p className="Title">
        Card {cardId}: {title}
      </p>
      <div className="ImageContainer">
        <img src={image} id="image" alt="article img content" />
      </div>
    </div>
  );
};
