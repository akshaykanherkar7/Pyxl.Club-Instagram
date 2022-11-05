import axios from "axios";
import * as types from "./auth.actionTypes";

export const registerSignUpAPI = (user) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQ });
  return axios
    .post("http://localhost:8080/UserData", user)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      return types.REGISTER_SUCCESS
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILED, payload: e });
      return types.REGISTER_FAILED
    });
};

export const getLoginDataAPI = () => (dispatch) => {
  dispatch({ type: types.GET_LOGINDATA_REQ });
  return axios
    .get("http://localhost:8080/UserData")
    .then((res) => {
      console.log("res:", res);
      dispatch({ type: types.GET_LOGINDATA_SUCCESS, payload: res.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_LOGINDATA_FAILED });
    });
};

export const checkLoginorNotAPI = (creds) => (dispatch) => {
  dispatch({ type: types.CHECK_LOGIN_REQ });
  return axios
    .get("http://localhost:8080/UserData")
    .then((res) => {
      dispatch({ type: types.CHECK_LOGIN_SUCCESS, payload: creds });
    })
    .catch((e) => {
      dispatch({ type: types.CHECK_LOGIN_FAILED });
    });
};

export const logOutAPI = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
