import * as types from "./post.actionTypes";
import axios from "axios";

export const getPostsAPI = () => (dispatch) => {
  dispatch({ type: types.GET_POSTS_REQ });
  return axios
    .get("http://localhost:8080/Posts")
    .then((res) => {
      dispatch({ type: types.GET_POSTS_SUCC, payload: res.data });
    })
    .catch((err) => {
      console.log("err:", err);
      dispatch({ type: types.GET_POSTS_FAI });
    });
};

export const likeAPI = (id, data) => (dispatch) => {
  return axios.patch(`http://localhost:8080/Posts/${id}`, data);
};

export const postCommentAPI = (id, newData) => (dispatch) => {
  return axios
    .put(`http://localhost:8080/Posts/${id}`, newData)
    .then((res) => {
      dispatch({ type: types.COMMENT_POST_HANDLE, payload: res.data });
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
