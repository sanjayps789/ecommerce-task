import React, { useEffect, useState } from 'react'
import { getAllCategoriesAPI } from '../services/allAPI'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Categories() {
const [allcategory,setAllCategory] = useState([])
  const getAllCategories = async () =>{
    const result = await getAllCategoriesAPI()
    setAllCategory(result.data)
  }
  useEffect(()=>{
    getAllCategories()
  },[])
  console.log(allcategory);
  return (
    <div style={{paddingTop:'150px'}}>
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <h1 className='fw-bolder text-black mb-2'>All Categories</h1>
            {allcategory?.length>0 ?
            allcategory.map((category,index)=>(
              <div key={index} className="col-lg-3 col-md-4">
           <Link style={{textDecoration:'none'}} to={`/view-category-items/${category?.id}`}>
              <Card className='shadow mb-3' style={{ width: '18rem' }}>
                    <Card.Img style={{height:'250px'}} className='img-fluid w-100' variant="top" src={category?.image} />
                    <Card.Body className='d-flex justify-content-between align-items-center'>
                      <h5 className='fw-bold'>{category?.name}</h5>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Card.Body>
                  </Card>
           </Link>
            </div>
            )):<div className='py-5 text-center'>Loading....</div>
              }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categories