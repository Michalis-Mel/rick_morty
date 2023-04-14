import axios from "axios";
import { gameDetailsUrl } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsUrl(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      details: detailData.data,
    },
  });
};
