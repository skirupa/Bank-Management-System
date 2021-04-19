import React, { useState, useEffect} from 'react';

const PostCustomer = ()=>{
    const [AllCustomers,setCustomers] = useState([]);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [house_no,setHouse] = useState('');
    const [city,setCity] = useState('');
    const [zipcode,setZipCode] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const DeleteCustomer = async(customer_id)=>{
      try {
        const query =  fetch(`http://localhost:5000/customer/${customer_id}`,{
          method : 'DELETE'
        });
        console.log(query);
      } catch (error) {
        console.log(error);
      }
      setCustomers(AllCustomers.filter(cust => cust.customer_id!==customer_id));
    };
    const PostCustomer = async()=> {
      try {
        const body = {name,phone,email,house_no,city,zipcode,username,password};
        const query = fetch('http://localhost:5000/customer',{
          method : 'POST',
          headers : {'Content-Type' : 'application/json'},
          body : JSON.stringify(body)
        });
        console.log(query);
      } catch (error) {
        console.log(error);
      }
    };
    const GetCustomers = async()=> {
      try {
        const get_cust = await fetch('http://localhost:5000/customer');
        const data =await get_cust.json();
        setCustomers(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(()=>{
      GetCustomers();
  },[]);

    return (
        <div>
           <button className="btn btn-lg btn-outline-info" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   Add Customer
  </button>
        
        <div className='collapse' id='collapseExample'>

        <form className='container border p-5 mt-5' onSubmit={PostCustomer}>
        <h1>Add Customer</h1>
            <hr></hr>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" onChange ={e=> setName(e.target.value)} required/>
    <label >Phone</label>
    <input type="text" className="form-control" onChange ={e=> setPhone(e.target.value)}  />
    <label>Email</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" onChange ={e=> setEmail(e.target.value)} required/>
    <label >House No.</label>
    <input type="text" className="form-control" onChange ={e=> setHouse(e.target.value)} />
    <label>City</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" onChange ={e=> setCity(e.target.value)} required/>
    <label >Zip Code</label>
    <input type="text" className="form-control" onChange ={e=> setZipCode(e.target.value)}  />
    <label>Username</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" onChange ={e=> setUsername(e.target.value)} required/>
    <label >Password</label>
    <input type="text" className="form-control" onChange ={e=> setPassword(e.target.value)}  />
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
      <th scope="col">Username</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {AllCustomers.map(customer => (
          <tr key={customer.customer_id}>
              <td>{customer.customer_id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.house_no}</td>
              <td>{customer.city}</td>
              <td>{customer.zipcode}</td>
              <td>{customer.username}</td>
              <td><button className='btn btn-danger' onClick={()=>DeleteCustomer(customer.customer_id)}>Delete</button></td>

          </tr>
      ))}
  </tbody>
</table>
</div>
<hr></hr>
 
</div>
    );
};

export default PostCustomer;