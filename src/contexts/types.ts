export interface GlobalContextProps {
    transactions: TransactionModel[];
    addTransaction(transaction: TransactionModel): void;
    deleteTransaction(id: number): void;
}

export interface GlobalProviderProps {
    children: JSX.Element | JSX.Element[];
}

export interface TransactionModel {
    id: number;
    text: string;
    amount: number;
}
