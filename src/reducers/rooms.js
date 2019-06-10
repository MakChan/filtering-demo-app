import {
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR,
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
  GET_ROOM_ERROR
} from "../constants/actionTypes";

function rooms(
  state = {
    isFetching: true,
    isRoomFetching: true,
    roomsById: {},
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
      const roomsById = {};

      payload.rooms.map(room => {
        roomsById[room.id] = room;
      });

      return {
        ...state,
        isFetching: false,
        roomsById,
        rooms: payload.rooms
      };

    case GET_ROOMS_ERROR:
      return {
        ...state,
        isFetching: false,
        rooms: []
      };

    case GET_ROOM_REQUEST:
      return {
        ...state,
        isRoomFetching: true
      };

    case GET_ROOM_SUCCESS:
      return {
        ...state,
        isRoomFetching: false,
        roomsById: { ...state.roomsById, [payload.room.id]: payload.room }
      };

    default:
      return state;
  }
}

export default rooms;
