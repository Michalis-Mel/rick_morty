import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CharacterDetail = () => {
  //Data
  const { details, isLoading } = useSelector((state) => state.details);

  const navigate = useNavigate();

  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("card_shadow")) {
      navigate("/");
    }
  };
  return (
    <div>
      {!isLoading && (
        <div className="card_shadow" onClick={exitDetailHandler}>
          <div className="detail">
            <div className="info">
              <h3>Name : {details.name}</h3>
              <p>Status : {details.status}</p>
              <p>Species : {details.species}</p>
              <p>Gender : {details.gender}</p>
              <div className="img_con">
                <img src={details.image} alt={details.name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDetail;
