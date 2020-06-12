import { addto, remto, reset } from "../Actions/action";
let last = 0;
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case addto:
      return [...state, { description: action.desc, id: ++last }];
    case remto:
      return state.filter(note => (note.id != action.key ? note : ""));
    case reset:
      return [];
    default:
      return state;
  }
};
export default todoReducer;
