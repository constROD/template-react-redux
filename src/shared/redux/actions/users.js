import { SET_CURRENT_USER } from "../types/users";

export const setCurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload,
  };
};
