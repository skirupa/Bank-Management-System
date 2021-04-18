import React, { useState, useEffect} from 'react';

const PostBranch = ()=>{
//    const [AllBranch,setBranch] = useState([]);
    const [name,setName] = useState('');
    const [house_no,setHouse] = useState('');
    const [city,setCity] = useState('');
    const [zipcode,setZipCode] = useState('');
    const PostBranch = async()=> {
      try {
        const body = {name,house_no,city,zipcode};
        const query = fetch('http://localhost:5000/----',{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(body)
        });
        console.log(query);
      } catch (error) {
        console.log(error);
      }
    };
    const GetBranches = async()=> {
      try {
        const get_cust = await fetch('http://localhost:5000/-----');
        const data =await get_cust.json();
//        setBranch(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(()=>{
      GetBranches();
  },[]);

    return (
        <div>
           <button className="btn btn-lg btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   Add Branch
  </button>
        
        <div className='collapse' id='collapseExample'>

        <form className='container border p-5 mt-5' onSubmit={PostBranch}>
        <h1>Add Branch</h1>
            <hr></hr>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" onChange ={e=> setName(e.target.value)} required/>
    <label >House No.</label>
    <input type="text" className="form-control" onChange ={e=> setHouse(e.target.value)} />
    <label>City</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" onChange ={e=> setCity(e.target.value)} required/>
    <label >Zip Code</label>
    <input type="text" className="form-control" onChange ={e=> setZipCode(e.target.value)}  />

  </div>

  <button type="submit" className="btn-lg btn-primary">Add</button>
</form>
</div>
<hr></hr>
          <div className='p-5'>
<h1 style={{textAlign : 'center'}}>All Customers</h1>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">House No</th>
      <th scope="col">City</th>
      <th scope="col">Zip Code</th>
      <th scope="col">~</th>
    </tr>
  </thead>
  <tbody>
  {/* {AllCustomers.map(customer => (
          <tr key={customer.customer_id}>
              <td>{customer.customer_id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.house_no}</td>
              <td>{customer.city}</td>
              <td>{customer.zipcode}</td>
              <td>{customer.username}</td>

          </tr>
      ))} */}
  </tbody>
</table>
</div>
<hr></hr>
 
</div>
    );
};

export default PostBranch;