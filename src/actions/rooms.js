import {
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR
} from "../constants/actionTypes";

import { Firebase } from "../utils/firebase";

const firebase = new Firebase();

export function fetchRooms(type) {
  return (dispatch, getState) => {
    dispatch({ type: GET_ROOMS_REQUEST });

    firebase.rooms().then(snapshot => {
      console.log(snapshot.val());
      dispatch({
        type: GET_ROOMS_SUCCESS,
        payload: { rooms: [] }
      });
    });
  };
}
