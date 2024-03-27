import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{paddingTop:'100px'}}>
      <section className='py-5'>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-6 p-5">
             <div className='p-3'>
                <h1 className='text-black fw-bold'>Lets Explore Unique Products</h1>
                <p style={{textAlign:'justify'}} className=''>Embark on a journey of seamless shopping and unparalleled convenience with us. Welcome to a digital marketplace where your needs meet innovation, and where every click leads to satisfaction.</p>
                <Link to={'/allproducts'} className='btn btn-dark text-white'>Get started <i className="fa-solid fa-arrow-right"></i></Link>
             </div>
            </div>
            <div className="col-lg-6">
              <img className='w-100 img-fluid' src="https://i.postimg.cc/DZ9b0dKs/4.png" alt="" />
            </div>
          </div>
        </div>

      </section>
    <section className='py-5 bg-secondary-subtle'>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className='d-flex align-items-center justify-start flex-column'>
                <h1 className='text-black fw-bolder mb-3'>DOWNLOAD APP & <br />
                GET THE VOUCHER!</h1>
                <p className='py-3'>Get 30% off for first transaction using 
                Randvision <br />mobile app for now.</p>
                <div>
                  <img className='img-fluid w-auto' src="https://i.postimg.cc/Tw3JXcJc/app-store.png" alt="" />
                  <img className='img-fluid w-auto' src="https://i.postimg.cc/RhfRPZRr/play-store.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
            <img style={{height:'600px'}} className='img-fluid' src="https://i.postimg.cc/wBHSLS9T/app.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section style={{backgroundColor:'#faf864'}} className='py-5 '>
       <div className='container w-50'>
         <div className=' d-flex flex-column align-items-center justify-content-center p-4'>
            <h2 className="fw-bolder text-black ">
              JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
            </h2>
            <p className='pb-2'>Type your email down below and be young wild generation</p>
         <div  className='d-flex gap-2'>
            <input style={{width:'300px',outline:'none'}} placeholder='Add your email here' className='form-control ' type="text" />
            <button style={{backgroundColor:'black'}}  className="btn text-white">send</button>
         </div>
         </div>
       </div>
      </section>
    </div>
  )
}

export default Home