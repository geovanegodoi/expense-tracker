import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
    GlobalContextProps,
    GlobalProviderProps,
    TransactionModel,
} from "./types";

const INITIAL_STATE = {
    transactions: [
        { id: 1, text: "Flower", amount: -20 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Book", amount: -10 },
        { id: 4, text: "Camera", amount: 150 },
    ],
} as GlobalContextProps;

export const GlobalContext = createContext<GlobalContextProps>(INITIAL_STATE);

export function GlobalProvider({ children }: GlobalProviderProps) {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    function addTransaction(transaction: TransactionModel) {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    }

    function deleteTransaction(id: number) {
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
