import React from 'react';
import Header from './components of App/Header';
import {Balance} from './components of App/Balance';
import {AccountSummary} from './components of App/Acc_Details';
import {TransactionHistory} from './components of App/Trans_His';
import { AddTransaction } from './components of App/Add_Transaction';
import {GlobalProvider } from './components of App/context';



const Components = () => {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <AccountSummary />
                <TransactionHistory />
                <AddTransaction />
            </div>
        </GlobalProvider>
    )
}

export default Components