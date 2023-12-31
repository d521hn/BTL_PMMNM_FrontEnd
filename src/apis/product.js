
//Get product
import axios from "axios";

import { portUrl } from "../ultils/containts";

export const apiGetProducts = () => axios({
  url: `${portUrl}/products`,
  method: 'GET',
})

export const apiGetProduct = (pid) => axios({
  url: `${portUrl}/products/${pid}`,
  method: 'GET'
})

export const apiProductsByOld = (param) => axios({
  url: `${portUrl}/products?ageGroup=${param}`,
  method: 'GET'
})

export const apiProductsByBrand = (param) => axios({
  url: `${portUrl}/products?brandName=${param}`,
  method: 'GET'
})

export const apiProductsSearch = (param) => axios({
  url: `${portUrl}/products?search=${param}`,
  method: 'GET'
})

export const apiFillterProducts = (url) => axios({
  url: `${url}`,
  method: 'GET'
})


