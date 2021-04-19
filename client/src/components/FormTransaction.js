import React, { useEffect, useState } from 'react';

const FormTransaction = ()=>{
    const [account_id,SetAccid] = useState('');
    const [branch_id,SetBrid] = useState('');
    const [amount,SetAmt] = useState('');
    const GetAccountID = ()=>{
        const parameters = window.location.search.substring(1).split("&");
        const temp = parameters[0].split("=");
        console.log(parameters);
        console.log(temp);
        SetAccid(temp[1]);
    };
    useEffect(()=>{
        GetAccountID();
    },[]);
    const DoTransaction = ()=>{
        const action = document.getElementById('inputState').value;
        try {
            const body = {account_id,branch_id,amount,action};
            const query = fetch ('http://localhost:5000/transaction',{
                method : 'POST',
                headers : {'Content-Type':'application/json'},
                body : JSON.stringify(body)
            });
            console.log(body);
        } catch (error) {
            console.log(error);
        }
    };
    return(
    <form className='mt-5 jumbotron' onSubmit={DoTransaction}>
    <h1>Transaction</h1>
        <hr></hr>
    <div className="form-group">
    <label>Account ID</label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={account_id} disabled required />
    <label >Branch ID</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={e=>SetBrid(e.target.value)} required/>
    <label >Amount</label>
    <input type="text" className="form-control" id="exampleInputPassword1" onChange={e=>SetAmt(e.target.value)} required/>
    <label >Action</label>
    <select id="inputState" class="form-control">
        <option selected>Deposit</option>
      </select>
    </div>

    <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );  
};

export default FormTransaction;