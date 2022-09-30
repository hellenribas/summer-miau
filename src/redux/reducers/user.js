// const INICIAL_STATE = {
//   id: 0,
// }

// const user = (state = INICIAL_STATE, action) => {
//   switch(action.type) {
//     default:
//       return state;
//   }
// }

// export default user;











import { GET_EMAIL } from "../actions";

const INITIAL_STATE = {
  email: '',
  name: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EMAIL:
    return {
      ...state,
      email: action.payload,
    }  
  default:
    return state;
  }
}

export default user;

