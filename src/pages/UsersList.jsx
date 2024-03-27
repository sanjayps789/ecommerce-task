import React, { useEffect, useState } from 'react'
import { getAllUsersAPI } from '../services/allAPI'
import { Card } from 'react-bootstrap'

function UsersList() {
  const [userData,setUserData] = useState([])
  const getAllUsers = async() =>{
    const result = await getAllUsersAPI()
   setUserData(result.data)
  }
console.log(userData);
  useEffect(()=>{
    getAllUsers()
  },[])
  return (
    <div style={{paddingTop:'150px'}}>
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <h1 className='text-black py-3 fw-bolder'>Users</h1>
            {userData?.length>0 ? 
            userData.map((user,index)=>(
              <div key={index} className="col-lg-3 col-md-4">
              <Card className='shadow mb-3' style={{ width: '18rem' }}>
                  <Card.Img style={{height:'250px'}} className='img-fluid w-100' variant="top" src={user?.avatar} />
                  <Card.Body>
                    <h5>Name: <span className='text-primary fw-bold text-capitalize fs-4'>{user?.name}</span></h5>
                    <p>Email: <span className='text-danger ms-1'>{user?.email}</span></p>
                  </Card.Body>
                </Card>
            </div>
            ))
            :<div className='py-5'>Loading....</div>
             }
          </div>
        </div>
      </section>
    </div>
  )
}

export default UsersList