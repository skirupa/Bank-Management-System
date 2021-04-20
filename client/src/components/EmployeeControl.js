import React from 'react';
import customer from '../images/customer.png';
import employee from '../images/employee.png';
import branch from '../images/branch.png'
import {useHistory} from 'react-router-dom';
const EmployeeControl = ()=>{
    const history = useHistory();

    return(
<div className=" p-5 mt-4"  style={{  justifyContent:'center', alignItems:'center', height: '100vh' ,textAlign : 'center'}}>
<h1 style={{textAlign : "center"}}>Admin Control</h1>
<table className="table">
  <tbody>
    <tr>
      <td>
        <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div className="">
    <h3 className="float-left">Customer</h3>
    <button className="btn btn-outline-danger float-right" height="100px" onClick = {()=>history.push('/admin/customer')}>Edit</button>
    </div>
  <div className="card-body pd-5">
    <img src={customer} alt="customer not found" height="300px" className="rounded mx-auto d-block mt-4" />
  </div>
</div>
</td>
<td>
        <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div className="">
    <h3 className="float-left">Employee</h3>
    <button className="btn btn-outline-warning float-right" height="100px" onClick = {()=>history.push('/admin/employee')}>Edit</button>
    </div>
  <div className="card-body pd-5">
    <img src={employee} alt="employee not found" height="300px" className="rounded mx-auto d-block mt-4" />
  </div>
</div>
</td>
<td>
        <div className="card text-black bg-white mt-3 shadow-lg p-3 mb-5 bg-white rounded">
  <div className="">
    <h3 className="float-left">Branch</h3>
    <button className="btn btn-outline-warning float-right" height="100px" onClick = {()=>history.push('/admin/branch')}>Edit</button>
    </div>
  <div className="card-body pd-5">
    <img src={branch} alt="branch not found" height="300px" className="rounded mx-auto d-block mt-4" />
  </div>
</div>
</td>

    </tr>

  </tbody>
</table>
</div>
    );
};

export default EmployeeControl;