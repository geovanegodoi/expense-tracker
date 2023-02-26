import { Box } from "@mui/material";
import React from "react";

export default function IncomeExpenses() {
    return (
        <Box className="inc-exp-container">
            <Box>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">
                    +$0.00
                </p>
            </Box>
            <Box>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">
                    -$0.00
                </p>
            </Box>
        </Box>
    );
}
