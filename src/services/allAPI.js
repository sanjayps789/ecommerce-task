import SERVER_URL from "./baseUrl"
import { commonAPI } from "./commonAPI"


// get all products
export const getAllProductsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/products`,"")
}
// single products
export const getSingleProductAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/products/${id}`,"")
}

// all categories
export const getAllCategoriesAPI= async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// get products by category
export const getProductsByCategoryAPI = async(categoryId) =>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}/products`)
}

// all users
export const getAllUsersAPI= async()=>{
    return await commonAPI("GET",`${SERVER_URL}/users`,"")
}