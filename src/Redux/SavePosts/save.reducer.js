import * as types from "./save.actionTypes";

const initialState = {
  SavedPosts: [],
  isLoading: false,
  isError: false,
};

export const saveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_POST_REQ: {
      return { ...state, isLoading: true, isError: false };
    }

    case types.GET_POST_SCC: {
      return {
        ...state,
        SavedPosts: payload,
        isLoading: false,
        isError: false,
      };
    }

    case types.GET_POST_FAI: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
