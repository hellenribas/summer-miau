import { INICIAL_REQ, GET_API, FINAL_REQ, CLICKS } from "../actions";

const INITIAL_STATE = {
  api: [],
  loading: false,
  clicks: 0,
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
    case CLICKS:
      return {
        ...state,
        clicks: action.payload,
      };
  default:
    return state;
  }
}

export default cats;