import { login, logout } from "../Actions/action";

const logReducer = (state = false, action) => {
  switch (action.type) {
    case login:
      return true;
    case logout:
      return false;
    default:
      return state;
  }
};
export default logReducer;
