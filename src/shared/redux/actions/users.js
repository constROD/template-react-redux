import { SET_CURRENT_USER } from "shared/constants/redux/types";

export const setCurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};
