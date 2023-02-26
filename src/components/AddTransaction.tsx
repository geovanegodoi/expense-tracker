import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { TransactionModel } from "../contexts/types";

export default function AddTransaction() {
    const [formData, setFormData] = useState({
        text: "",
        amount: 0,
    });
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            ...formData,
        } as TransactionModel;
        addTransaction(newTransaction);
    };

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        placeholder="Enter text..."
                        value={formData.text}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                text: e.target.value,
                            }))
                        }
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter amount..."
                        value={formData.amount}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                amount: Number.parseInt(e.target.value),
                            }))
                        }
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </React.Fragment>
    );
}
