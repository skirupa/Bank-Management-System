import React, { useEffect, useState } from 'react';

const DisplayBranch = () =>{
    const [AllBranches,setBranches] = useState([]);
    const GetBranches = async() =>{
        try {
            const query = await fetch('http://localhost:5000/Branch',{
                method : 'GET'
            });
            const data = await query.json();
            setBranches(data);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(()=>{
        GetBranches();
    },[]);
    return (
      <div class='mt-5'> 
          <h1 style = {{textAlign : 'center'}}>All Branches</h1>
           <table class="table container mt-5">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Branch Name</th>
            <th scope="col">House number</th>
            <th scope="col">City</th>
            <th scope="col">Zip code</th>
          </tr>
        </thead>
        <tbody>
          {AllBranches.map (branch=>(
            <tr key = {branch.branch_id}>
                <td>{branch.branch_id}</td>
                <td>{branch.name}</td>
                <td>{branch.house_no}</td>
                <td>{branch.city}</td>
                <td>{branch.zip_code}</td> 
            </tr>
          ))};
        </tbody>
      </table>
      
      </div>
    );
};

export default DisplayBranch;