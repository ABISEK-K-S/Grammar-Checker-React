import { STORE } from "../type/storeType";

const INITIAL_STATE = {
  errors: {},
  noError: false
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE.REQUIRED_CHANGES:
      return {
        ...state,
        noError: false,
        errors: action.data
      };

    case STORE.NO_ERROR:
      return {
        ...state,
        noError: true
      };

    default:
      return state;
  }
};

export default storeReducer;
