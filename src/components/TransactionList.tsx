import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
    const { transactions, deleteTransaction } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul className="list">
                {transactions?.map((item) => (
                    <Transaction
                        key={item.id}
                        transaction={item}
                        handleDelete={deleteTransaction}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
}
