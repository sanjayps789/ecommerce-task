import React, { useEffect, useState } from 'react'
import { getSingleProductAPI } from '../services/allAPI'
import { useParams } from 'react-router-dom'

function View() {
  const {id} = useParams()
const [product,setProduct] = useState({})
const getProduct = async() =>{
  const result = await getSingleProductAPI(id)
  setProduct(result.data)
}
console.log(product);
useEffect(()=>{
  getProduct()
},[])
  return (
    <div>
      <div style={{paddingTop:'100px'}}>
        <div className="container my-5">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <img style={{height:'300px'}} className='w-100 img-fluid' src={product?.images?.[0]} alt="" />
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-6">
              <p className="lead">PID: {product?.id} </p>
            <h1 className='fw-bolder'>{product?.title}</h1>
            <h3 className='text-success mb-3'>$ {product?.price} </h3>
            <p style={{textAlign:'justify'}}>{product?.description}</p>
            <button className='btn btn-outline-success'><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View