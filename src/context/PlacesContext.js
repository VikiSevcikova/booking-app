import React, { useReducer } from "react";

export const PlacesContext = React.createContext();

const today = new Date();
const tomorrow = new Date(new Date().setDate(today.getDate() + 1));

const initialState = {
  loading: false,
  places: null,
  checkIn: today,
  checkOut: tomorrow,
  adults: 1,
  children: 0,
  alert: { show: false, message: "" },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "CHANGE_PLACES":
      return {
        ...state,
        places: action.payload,
        loading: false
      };
    case "CHANGE_CHECKIN":
      return {
        ...state,
        checkIn: action.payload,
      };
    case "CHANGE_CHECKOUT":
      return {
        ...state,
        checkOut: action.payload,
      };
    case "CHANGE_ADULTS":
      return {
        ...state,
        adults: action.payload,
      };
    case "CHANGE_CHILDREN":
      return {
        ...state,
        children: action.payload,
      };
    case "CHANGE_ALERT_MESSAGE":
      return {
        ...state,
        alert: { ...state.alert, message: action.payload },
      };
    case "SHOW_ALERT":
      return {
        ...state,
        alert: { ...state.alert, show: !state.alert.show },
      };
    default:
      return state;
  }
};

export const PlacesProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PlacesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PlacesContext.Provider>
  );
};

export const PlacesConsumer = PlacesContext.Consumer;
