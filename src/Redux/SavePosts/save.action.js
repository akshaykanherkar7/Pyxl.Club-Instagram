import * as types from "./save.actionTypes";
import axios from "axios";

export const savePostAPI = (savePost) => (dispatch) => {
  dispatch({ type: types.SAVE_POST_REQ });
  return axios
    .post("http://localhost:8080/Save", savePost)
    .then((res) => {
      return types.SAVE_POST_SCC;
    })
    .catch((err) => {
      return types.SAVE_POST_FAI;
    });
};

export const getSavedPostsAPI = () => (dispatch) => {
  dispatch({ type: types.GET_POST_FAI });
  return axios
    .get("http://localhost:8080/Save")
    .then((res) => {
      dispatch({ type: types.GET_POST_SCC, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.SAVE_POST_FAI });
    });
};
