const initState = {
  dead: [],
  alive: [],
  searched: [],
};

const charactersReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_DEAD":
      return {
        ...state,
        dead: action.payload.dead,
      };
    case "FETCH_ALIVE":
      return {
        ...state,
        alive: action.payload.alive,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default charactersReducer;
