import React, { Fragment } from 'react';
import DisplayBranch from './DisplayBranch';
import FormTransaction from './FormTransaction';

const Transaction = ()=>{
    return(
        <Fragment>
        <FormTransaction/>
        <DisplayBranch/>
        </Fragment>
    );
};

export default Transaction;