import { FETCH_CLIENTS, FETCH_USER } from "../types";
import { firebaseClients, authRef, provider } from "../../config/fbConfig";

export const fetchClients = () => async dispatch => {
  firebaseClients.on("value", snapshot => {
    dispatch({ type: FETCH_CLIENTS, payload: snapshot.val() });
  });
};

export const addClient = newClient => async dispatch => {
  firebaseClients.push().set(newClient);
};

export const removeClient = removeClientId => async dispatch => {
  firebaseClients.child(removeClientId).remove();
};

export const updateContact = (id, data) => async dispatch => {
  return firebaseClients
    .child(id)
    .update(data)
    .then(() => firebaseClients.once("value"))
    .then(snapshot => snapshot.val())
    .catch(error => ({
      errorCode: error.code,
      errorMessage: error.message
    }));
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
