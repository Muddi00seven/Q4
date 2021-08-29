import React, { createContext, useReducer } from 'react';
import { reducer } from './reducer';

const count = 15;
export const GlobalContext = createContext(count);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, count);

    function increment() {
        dispatch("INCREMENT");
    }
    function decrement() {
        dispatch("DECREMENT");
    }
    function multiply() {
        dispatch("MULTIPLY");
    } function divide() {
        dispatch("DIVIDE");
    }
    return (
        <GlobalContext.Provider
            value={{
                state,
                count,
                increment,
                decrement,
                multiply,
                divide
            }}>
            {children}
        </GlobalContext.Provider>
    );

}