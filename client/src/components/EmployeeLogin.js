import React, { useState } from 'react';
import employee from '../images/employee.png';
//import {useHistory} from 'react-router-dom';
const EmployeeLogin = ()=>{
  
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
    const EmployeeLogin = ()=>{
      const body = {username,password};
      console.log(body);
    };
    return (
<div>
    <br></br>
<h1 className="mt-5 mb-5" style={{textAlign : "center"}}>Employee Login</h1>
<div className="border container p-0 shadow-lg p-3 mb-5 bg-white rounded "  style={{display: 'flex',  justifyContent:'center'}}>
    <img src={employee} alt="customer missing" className="rounded mx-auto d-block ml-10 mr-10 flex-left p-5" height="400px"></img>
    
    <form className='container flex-right p-5 ' onSubmit = {()=>EmployeeLogin} style={{alignSelf : "right"}} action='http://localhost:3000/employee' method='get' >

  <div className="form-group">
    <label className="mt-4">Username</label>
    <input type="text" className="form-control mb-3" aria-describedby="emailHelp" onChange = {e => setUserName(e.target.value)} required/>
    <label >Password</label>
    <input type="text" className="form-control" onChange = {e => setPassword(e.target.value)} required/>
  </div>

  <button type="submit" class="btn btn-primary btn-lg mt-3" >Login</button>
</form>
</div>
</div>
    );
};

export default EmployeeLogin;