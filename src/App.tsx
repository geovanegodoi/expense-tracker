import { Box } from "@mui/material";
import React from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

function App() {
    return (
        <Box className="App">
            <Header />
            <Box className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </Box>
        </Box>
    );
}

export default App;
