import React, { useEffect, useState } from 'react'
import { getAllProductsAPI } from '../services/allAPI'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AllProducts() {
  const [allProducts, setAllProducts] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const getAllProducts = async () => {
    const result = await getAllProductsAPI()
    setAllProducts(result.data)
  }
  useEffect(() => {
    getAllProducts()
  }, [])
  console.log(allProducts);

  const handleSearch = async (e) =>{
    setSearchKey(e.target.value)
    const result = await getAllProductsAPI()
    const searchItem = result.data.filter(i=>i.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setAllProducts(searchItem)
  }
  return (
    <div style={{paddingTop:'100px'}}>
      {/* <!-- Section--> */}
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className='row py-4'>
              <div className='col-lg-4'>
                <h2 className='mb-3 fw-bold'>All Products</h2>
                </div>
                <div className="col-lg-8">
                  <input type="text" value={searchKey} onChange={handleSearch} className='form-control' placeholder="Serach By Name" />
                </div>
            </div>
            {allProducts?.length>0?
            allProducts.map((item,index)=>(
              <div key={index} className="col-lg-3 col-md-4 mb-3">
             {
              <Link style={{textDecoration:'none'}} to={`/view/${item?.id}`}>
                <Card className='shadow' style={{ width: '18rem' }}>
                  <Card.Img style={{height:'250px'}} className='img-fluid w-100' variant="top" src={item?.images?.find(i=>i[0])}  />
                  <Card.Body>
                    <h5>{item?.title.slice(0,15)}...</h5>
                    <p>Price: <span className='text-success'>{item?.price}</span> $</p>
                    <button className='btn btn-outline-success'><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                  </Card.Body>
                </Card>
              </Link>}
            </div>
            )): <div className='py-5'>Products not Found!!!</div>
              }
          </div>
        </div>
      </section>

    </div>
  )
}

export default AllProducts