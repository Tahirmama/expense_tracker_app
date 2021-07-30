import React, { createContext, useReducer } from 'react';

// Import the Reducer
import Reducer from './AppReducer';

// Create the initial state
const initialState = {
    transactions: []
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
//Creating a provider for context so it can send the data overall 
//through this provider we give acces to our transactions
 //using children here to give access to all our component like header,balance,etc
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}