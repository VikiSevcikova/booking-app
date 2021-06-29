import React, { useEffect, useReducer } from "react";

export const UserContext = React.createContext();

const localUsers = JSON.parse(localStorage.getItem("users"));
const loggedIn =  JSON.parse(localStorage.getItem("loggedInUser"));

const initialState = {
  users: localUsers,
  loggedInUser: loggedIn
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP": 
      return {
        ...state,
        users: state.users ? [...state.users, action.payload] : [action.payload],
        loggedInUser: action.payload
      };
    case "LOG_IN":
      return {
        ...state,
        loggedInUser: state.users.find(u=> { return u.email === action.payload.email && u.password === action.payload.password})
      };
    case "LOG_OUT":
      return {
        ...state,
        loggedInUser: null
      };
    case "ADD_BOOKING":
      return {
        ...state,
        users: state.users.map(u =>{
          if(u.email === state.loggedInUser.email){
            return {...u, bookings: [...u.bookings, action.payload]}
          }
          return u;
        })
      };
    default:
      return state;
  }
};

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(()=> {
    localStorage.setItem("users", JSON.stringify(state.users));
  }, [state.users]);

  useEffect(()=> {
    localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
  }, [state.loggedInUser]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
