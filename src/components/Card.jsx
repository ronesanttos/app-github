import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import Style from "./Card.module.css";
const Card = ({ avatar_url, login, location, followers, following }) => {
  return (
    <div className={Style.card}>
      <img src={avatar_url} alt="avatar" />
      <h2>{login}</h2>
      {location && (
        <p className={Style.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={Style.stats}>
        <div>
          <p>Seguidores: </p>
          <p className={Style.number}>{followers}</p>
        </div>
      <div>
        <p>Seguindo: </p>
        <p className={Style.number}>{following}</p>
      </div>
      </div>

      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  );
};

export default Card;
