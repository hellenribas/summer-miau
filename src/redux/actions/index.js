// import { GET_EMAIL } from "../../helpers/actionType";
export const GET_EMAIL = 'GET_EMAIL';
export const INICIAL_REQ = 'INICIAL_REQ';
export const FINAL_REQ = 'FINAL_REQ';
export const FAIL_REQ = 'FAIL_REQ';
export const GET_API = 'GET_API';
export const CLICKS = 'CLICKS';


export const getEmail = (payload) => ({ type: GET_EMAIL, payload });
export const inicialRequest = () => ({ type: INICIAL_REQ });
export const finalRequest = () => ({ type: FINAL_REQ });
export const responseApi = (payload) => ({ type: GET_API, payload })
export const getClicks = (payload) => ({ type: CLICKS, payload });


export const getRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(inicialRequest());
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1');
      const result = await response.json();
      dispatch(responseApi(result));
      dispatch(finalRequest());
    } catch (e) {
      throw new Error(e);
    }
  }
}

















// export const REQUEST_API = 'REQUEST_API';
// export const RESPONSE_API = 'RESPONSE_API';

// export const getEmail = (payload) => ({ type: GET_EMAIL, payload });
// export const requestApi = () => ({ type: REQUEST_API });
// export const responseApi = (payload) => ({ type: RESPONSE_API, payload });

// export function fetchApi() {
//   return async (dispatch) => {
//     dispatch(requestApi());
//     const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5');
//     const result = await response.json();
//     return dispatch(responseApi(result));
//   };
// }