import React, { useState, useEffect} from 'react';

const PostBranch = ()=>{
    const [AllBranch,setBranch] = useState([]);
    const [name,setName] = useState('');
    const [house_no,setHouse] = useState('');
    const [city,setCity] = useState('');
    const [zip_code,setZipCode] = useState('');
    const DeleteBranch = async(branch_id) =>{
        try {
          const query = fetch(`http://localhost:5000/branch/${branch_id}`,{
              method : 'DELETE'
          });
          console.log(query);
          //etBranch(AllBranch.filter(branch=> branch.branch_id!==branch_id));
        } catch (error) {
          console.log(error.message);
        }
        window.location.reload();
    };
    const PostBranch = async()=> {
      try {
        const body = {name,house_no,city,zip_code};
        const query = fetch('http://localhost:5000/branch',{
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
        const query = await fetch('http://localhost:5000/branch');
        const data =await query.json();
        setBranch(data);
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
<h1 style={{textAlign : 'center'}}>All Branches</h1>
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Branch Name</th>
      <th scope="col">House No</th>
      <th scope="col">City</th>
      <th scope="col">Zip Code</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
{AllBranch.map(branch => (
  <tr key={branch.branch_id}>
    <td>{branch.branch_id}</td>
    <td>{branch.name}</td>
    <td>{branch.house_no}</td>
    <td>{branch.city}</td>
    <td>{branch.zip_code}</td>
    <td><button className = 'btn btn-danger' onClick={()=> DeleteBranch(branch.branch_id)}>Delete</button></td>
  </tr>
))}
  </tbody>
</table>
</div>
<hr></hr>
 
</div>
    );
};

export default PostBranch;