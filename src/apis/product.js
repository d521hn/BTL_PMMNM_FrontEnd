import axios from "axios";
import { portUrl } from "../ultils/containts";

export const apiGetProducts = () => axios({
  url: `${portUrl}/products`,
  method: 'GET'
})

export const apiGetProduct = (pid) => axios({
  url: `${portUrl}/products/${pid}`,
  method: 'GET'
})