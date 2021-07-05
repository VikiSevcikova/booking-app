import React, { useEffect, useReducer } from "react";

export const UserContext = React.createContext();

const localUsers = JSON.parse(localStorage.getItem("users"));
const loggedIn =  JSON.parse(localStorage.getItem("loggedInUser"));

const initialState = {
  users: localUsers,
  loggedInUser: loggedIn
};

const reducer = (userState, action) => {
  switch (action.type) {
    case "SIGN_UP": 
      return {
        ...userState,
        users: userState.users ? [...userState.users, action.payload] : [action.payload],
        loggedInUser: action.payload
      };
    case "LOG_IN":
      return {
        ...userState,
        loggedInUser: userState.users.find(u=> { return u.email === action.payload.email && u.password === action.payload.password})
      };
    case "LOG_OUT":
      return {
        ...userState,
        loggedInUser: null
      };
    default:
      return userState;
  }
};

export const UserProvider = (props) => {
  const [userState, userDispatch] = useReducer(reducer, initialState);
  
  useEffect(()=> {
    localStorage.setItem("users", JSON.stringify(userState.users));
  }, [userState.users]);

  useEffect(()=> {
    localStorage.setItem("loggedInUser", JSON.stringify(userState.loggedInUser));
  }, [userState.loggedInUser]);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
