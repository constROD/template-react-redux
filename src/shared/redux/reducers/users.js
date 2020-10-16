import { DEFAULT_USERS } from "shared/constants/redux/defaults";
import { SET_CURRENT_USER } from "shared/constants/redux/types";

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
