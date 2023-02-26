import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { TransactionModel } from "../contexts/types";

export interface TransactionProps {
    transaction: TransactionModel;
    handleDelete: (id: number) => void;
}

export default function Transaction({
    transaction,
    handleDelete,
}: TransactionProps) {
    const transactionIsNegative = transaction.amount < 0;
    const sign = transactionIsNegative ? "-" : "+";
    const className = transactionIsNegative ? "minus" : "plus";

    return (
        <li key={transaction.id} className={className}>
            {transaction.text}
            <span>
                {sign} ${Math.abs(transaction.amount)}
            </span>
            <button
                className="delete-btn"
                onClick={() => handleDelete(transaction.id)}
            >
                x
            </button>
        </li>
    );
}
