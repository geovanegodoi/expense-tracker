import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export default function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions?.map((item) => item.amount);
    const income = calculateIncome(amounts);
    const expense = calculateExpense(amounts);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    );
}

function calculateIncome(amounts: number[]): string {
    return amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
}

function calculateExpense(amounts: number[]): string {
    return (
        amounts
            .filter((item) => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);
}
