import { Typography } from "@mui/material";
import React from "react";

export default function Balance() {
    return (
        <React.Fragment>
            <Typography variant="h6">Your Balance</Typography>
            <Typography variant="h3" id="balance" fontWeight="bold" border="0">
                $0.00
            </Typography>
        </React.Fragment>
    );
}
