import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export default function Balance() {
    const totalBalance = CalculateBalance();

    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1 id="balance">$ {totalBalance}</h1>
        </React.Fragment>
    );
}

function CalculateBalance(): string | undefined {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions?.map((item) => item.amount);
    const total = amounts?.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return total;
}
