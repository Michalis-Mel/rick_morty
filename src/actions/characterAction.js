import axios from "axios";

import { aliveCharacters, deadCharacters, searchCharacter } from "../api";

//ACTION CREATOR

export const loadAliveCharacters = () => async (dispatch) => {
  //FETCH AXIOS
  const aliveCharactersData = await axios.get(aliveCharacters());
  dispatch({
    type: "FETCH_ALIVE",
    payload: {
      alive: aliveCharactersData.data.results,
    },
  });
};
export const loadDeadCharacters = () => async (dispatch) => {
  //FETCH AXIOS
  const deadCharactersData = await axios.get(deadCharacters());
  dispatch({
    type: "FETCH_DEAD",
    payload: {
      dead: deadCharactersData.data.results,
    },
  });
};

export const loadSearchedCharacter = (name) => async (dispatch) => {
  //FETCH AXIOS
  const searchedCharactersData = await axios.get(searchCharacter(name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedCharactersData.data.results,
    },
  });
};
export const clearSearchedCharacter = () => async (dispatch) => {
  //FETCH AXIOS
  dispatch({
    type: "CLEAR_SEARCH",
  });
};
