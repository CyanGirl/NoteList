import { INC, DEC, login, logout, addto, remto, reset } from "./action";

export const add = () => {
  return {
    type: INC
  };
};
export const subtract = () => {
  return {
    type: DEC
  };
};
export const logIn = () => {
  return {
    type: login
  };
};
export const logOut = () => {
  return {
    type: logout
  };
};
export const addToList = bug => {
  return {
    type: addto,
    desc: bug
  };
};
export const RemToList = id => {
  return {
    type: remto,
    key: id
  };
};
export const Reset = () => {
  return {
    type: reset
  };
};
