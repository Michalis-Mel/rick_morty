import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";

const Character = ({ name, species, gender, origin, image, id }) => {
  //Load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetails(id));
  };
  return (
    <div className="character" onClick={loadDetailHandler}>
      <Link to={`/${id}`}>
        <div className="char_con">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>Species : {species}</p>
          <p>Gender : {gender}</p>
          <p>Origin : {origin}</p>
        </div>
      </Link>
    </div>
  );
};

export default Character;
