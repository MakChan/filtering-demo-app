import {
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR
} from "../constants/actionTypes";

function rooms(
  state = {
    isFetching: true,
    rooms: []
  },
  action
) {
  const { payload } = action;
  switch (action.type) {
    case GET_ROOMS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        GET_ROOMS_ERROR: payload.rooms
      };

    case GET_ROOMS_ERROR:
      return {
        ...state,
        isFetching: false,
        GET_ROOMS_ERROR: []
      };

    default:
      return state;
  }
}

export default rooms;
