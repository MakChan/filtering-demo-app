import {
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR,
  GET_ROOM_REQUEST,
  GET_ROOM_SUCCESS,
  GET_ROOM_ERROR
} from "../constants/actionTypes";

import { Firebase } from "../utils/firebase";

const firebase = new Firebase();

export function fetchRooms() {
  return dispatch => {
    dispatch({ type: GET_ROOMS_REQUEST });

    firebase.rooms().then(snapshot => {
      const res = snapshot.val();
      if (!res) {
        dispatch({
          type: GET_ROOMS_ERROR
        });
        return;
      }

      dispatch({
        type: GET_ROOMS_SUCCESS,
        payload: { rooms: res }
      });
    });
  };
}
export function fetchRoom(roomId) {
  return (dispatch, getState) => {
    dispatch({ type: GET_ROOM_REQUEST });

    const state = getState();
    const room = state.rooms.rooms.find(item => item.id === roomId);

    if (!room)
      firebase.room(roomId).then(snapshot => {
        const res = snapshot.val();
        if (!res) {
          dispatch({
            type: GET_ROOM_ERROR
          });
          return;
        }

        dispatch({
          type: GET_ROOM_SUCCESS,
          payload: { room: res }
        });
      });
  };
}
