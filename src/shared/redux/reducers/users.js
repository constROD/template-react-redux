import { DEFAULT_USERS } from "shared/constants/redux";
import { SET_CURRENT_USER } from "../types/users";

const usersReducer = (state = DEFAULT_USERS, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
