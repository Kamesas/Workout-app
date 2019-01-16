import { FETCH_VALUES, FETCH_USER } from "../types";
import { firebaseValue, authRef, provider } from "../../config/fbConfig";

export const isToday = () => ({
  type: "IS_TODAY"
});

export const addValue = newValue => async dispatch => {
  firebaseValue.push().set(newValue);
};

export const fetchValues = () => async dispatch => {
  firebaseValue.on("value", snapshot => {
    dispatch({ type: FETCH_VALUES, payload: snapshot.val() });
  });
};

export const removeClient = removeClientId => async dispatch => {
  firebaseValue.child(removeClientId).remove();
};

export const updateContact = (id, data) => async dispatch => {
  return firebaseValue
    .child(id)
    .update(data)
    .then(() => firebaseValue.once("value"))
    .then(snapshot => snapshot.val())
    .catch(error => ({ errorCode: error.code, errorMessage: error.message }));
};

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};
