import React, { createContext, useReducer, useEffect, useContext } from 'react';
import AppReducer from '../store/appReducer';
import { LoadBlockchain } from '../store/asyncActions';

const initalState = {
    web3: null,
    accounts: [],
    contract: null,
}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    useEffect(() => {
        LoadBlockchain(dispatch);
    }, [])

    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useStore = () => useContext(GlobalContext);