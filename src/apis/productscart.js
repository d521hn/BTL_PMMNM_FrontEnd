import axios from "axios";
import { portUrl } from "../ultils/containts";


export const apiProductsByCart = (cid) => axios({
  url: `${portUrl}/productcarts/cartId/${cid}`,
  method: 'GET'
})