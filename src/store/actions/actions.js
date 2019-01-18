import { FETCH_VALUES, FETCH_USER, FETCH_ALL_VALUES } from "../types";
import {
  firebaseValue,
  databaseRef,
  authRef,
  provider
} from "../../config/fbConfig";

/* moment.js */
export const isToday = () => ({
  type: "IS_TODAY"
});

/* CRUD Firebase */
export const addValue = newValue => async dispatch => {
  firebaseValue.push().set(newValue);
};

export const addUserValue = newValue => async dispatch => {
  //console.log(newValue.setChild);
  databaseRef
    .child(newValue.setChild)
    .push()
    .set(newValue);
};

export const fetchAllValues = () => async dispatch => {
  databaseRef.on("value", snapshot => {
    dispatch({ type: FETCH_ALL_VALUES, payload: snapshot.val() });
    //console.log(snapshot.val());
  });
};

export const fetchValues = uid => async dispatch => {
  //console.log(uid);
  databaseRef.child(uid).on("value", snapshot => {
    dispatch({ type: FETCH_VALUES, payload: snapshot.val() });
    //console.log(snapshot.val());
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

/* Authentification with Firebase */
export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
      localStorage.setItem("userAction", user.uid);
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
      localStorage.removeItem("userAction");
    }
  });
};

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {
      alert("Вход выполнен успешно !");
    })
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      alert("Ты вышел из аккаунта !");
    })
    .catch(error => {
      console.log(error);
    });
};
