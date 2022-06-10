import "./Card.css";
const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card-contents">
        <h1 className="name-heading">{data.name.charAt(0)}</h1>
        <div className="user-name">{data.name}</div>
        <div className="at">@{data.username}</div>
        <div className="website">
          <a href="">http://{data.website}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
