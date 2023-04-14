//Import images
import logo from "../images/rick-and-morty-31015.png";
import portal from "../images/portal.png";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  loadSearchedCharacter,
  clearSearchedCharacter,
} from "../actions/characterAction";

const Nav = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (textInput) {
      dispatch(loadSearchedCharacter(textInput));
      setTextInput("");
    }
  };

  const clearSearch = () => {
    dispatch(clearSearchedCharacter());
    setTextInput("");
  };
  return (
    <div className="nav">
      <Link to="/" className="logo" onClick={clearSearch}>
        <img className="portal" src={portal} alt="portal" />
        <img className="title" src={logo} alt="Rick & Morty" />
      </Link>
      <form onSubmit={submitSearch}>
        <input
          onChange={inputHandler}
          placeholder="Search for a character..."
          value={textInput}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Nav;
