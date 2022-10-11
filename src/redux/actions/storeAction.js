import { STORE } from "./../type/storeType";
import KEY_CONSTANT from "./../../constants/keyConstants";

export const checkGrammar = (data) => (dispatch) => {
  let request = fetch(
    `https://api.textgears.com/grammar?key=${KEY_CONSTANT.API_KEY}&text=${data}`
  );

  request
    .then((res) => res.json())
    .then((res) => {
      if (res.status == true) {
        res.response.errors.length > 0
          ? dispatch(requiredChanges(res.response.errors))
          : dispatch(noError());
      } else {
        console.log("Error is fetching data");
      }
    })
    .catch((e) => console.log("error", e));
};

export const requiredChanges = (data) => {
  return {
    type: STORE.REQUIRED_CHANGES,
    data: data
  };
};

export const noError = () => {
  return {
    type: STORE.NO_ERROR
  };
};
