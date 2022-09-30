import { INICIAL_REQ, GET_API, FINAL_REQ } from "../actions";

const INITIAL_STATE = {
  api: [],
  loading: false,
};

function cats(state = INITIAL_STATE, action) {
  switch (action.type) {
  case INICIAL_REQ:
    return {
      ...state,
      loading: true,
    };
  case GET_API:
    return {
      ...state,
      api: action.payload,
    }
    case FINAL_REQ:
    return {
      ...state,
      loading: false,
    };
  default:
    return state;
  }
}

export default cats;