import { useEffect } from "react";

//Import Styles
import "../styles/app.scss";
import { useLocation } from "react-router-dom";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  loadAliveCharacters,
  loadDeadCharacters,
} from "../actions/characterAction";

//Components
import Character from "../components/Character";
import CharacterDetail from "../components/CharacterDetail";

const Home = () => {
  //Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[1];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAliveCharacters());
    dispatch(loadDeadCharacters());
  }, [dispatch]);

  //Get the data from the api
  const { dead, alive, searched } = useSelector((state) => state.characters);

  return (
    <div className="main_page">
      {pathId && <CharacterDetail />}

      {searched.length ? (
        <div className="section">
          <div className="characters">
            <h2>Searched Characters</h2>
            <div className="characters">
              {searched &&
                searched.map((char) => (
                  <Character
                    name={char.name}
                    species={char.species}
                    gender={char.gender}
                    image={char.image}
                    origin={char.origin.name}
                    id={char.id}
                    key={char.id}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {alive && (
        <div className="section">
          <h2>Alive Characters</h2>
          <div className="characters">
            {alive.map((char) => (
              <Character
                name={char.name}
                species={char.species}
                gender={char.gender}
                image={char.image}
                origin={char.origin.name}
                id={char.id}
                key={char.id}
              />
            ))}
          </div>
        </div>
      )}
      {dead && (
        <div className="section">
          <h2>Dead Characters</h2>
          <div className="characters">
            {dead.map((char) => (
              <Character
                name={char.name}
                species={char.species}
                gender={char.gender}
                image={char.image}
                origin={char.origin.name}
                id={char.id}
                key={char.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
