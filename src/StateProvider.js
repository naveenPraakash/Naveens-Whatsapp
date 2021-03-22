import React, { createContext, useContext, useReducer } from "react";

// the following step creates the data layer
 export const StateContext = createContext();


 // here App component is the children
 // The StateContext allows us to set up the data layer 
 export const StateProvider = ({ reducer, initialState, children}) => (
     <StateContext.Provider value= {useReducer(reducer, initialState)}> {children}</StateContext.Provider>
 );

 // the folowing line allows us to pull data from the datalayer
 export const useStateValue = () => useContext( StateContext );