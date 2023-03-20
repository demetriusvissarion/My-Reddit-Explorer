import Up from "../img/Up.svg";
import Down from "../img/Down.svg";

export const Vote = ({ voteNumber }) => {
  return (
    <div>
      <img src={Up} className="UpIcon" alt="Up Icon" />
      <img src={Down} className="DownIcon" alt="Down Icon" />
      <p className="Vote">{voteNumber}</p>
    </div>
  );
};
