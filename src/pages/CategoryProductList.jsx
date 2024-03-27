import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductsByCategoryAPI } from '../services/allAPI';
import { Card } from 'react-bootstrap';

function CategoryProductList() {
    const { cid } = useParams()
    // console.log(cid);
    const [products, setProducts] = useState([])
    const getProductsByCategory = async () => {
        const result = await getProductsByCategoryAPI(cid)
        setProducts(result.data)
    }
    console.log(products);
    useEffect(() => {
        getProductsByCategory()
    }, [])
    return (
        <div style={{ paddingTop: '150px' }}>
            <section>
                <div className="container">
                    <div className="row">
                        <h4 className='text-dark fw-bolder py-3'>Products <span>({products?.length})</span></h4>
                       {products?.length>0 ?
                       products.map((item,index)=>(
                        <div key={index} className="col-lg-3 col-md-4 mb-3">
                            <Link style={{ textDecoration: 'none' }} to={`/view/${item?.id}`}>
                                <Card className='shadow' style={{ width: '18rem' }}>
                                    <Card.Img style={{ height: '250px' }} className='img-fluid w-100' variant="top" src={item?.images?.find(i => i[0])} />
                                    <Card.Body>
                                        <h5>{item?.title.slice(0, 15)}...</h5>
                                        <p>Price: <span className='text-success'>{item?.price}</span> $</p>
                                        <button className='btn btn-outline-success'><i className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                       )):<div className='text-center py-5'>Loading...</div>
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CategoryProductList