import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AllProducts from './pages/AllProducts'
import Cart from './pages/Cart'
import Home from './pages/Home'
import View from './pages/View'
import Categories from './pages/Categories'
import UsersList from './pages/UsersList'
import CategoryProductList from './pages/CategoryProductList'

function App() {

  return (
    <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/allproducts' element={<AllProducts/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/view/:id' element={<View/>}/>
    <Route path='/view-category-items/:cid' element={<CategoryProductList/>}/>
    <Route path='/users' element={<UsersList/>}/>
    <Route path='/*' element={<Navigate to={'/'}/>}/>
  </Routes>
  <Footer/>
    </>
  )
}

export default App
