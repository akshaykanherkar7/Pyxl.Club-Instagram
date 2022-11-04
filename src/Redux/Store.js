import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/auth.reducer";
import { postReducer } from "./Posts/post.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
