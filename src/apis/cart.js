import axios from "axios";
import { portUrl } from "../ultils/containts";

//Call Api get band
export const apiGetCart = (uid) => axios({
  url: `${portUrl}/carts/user/${uid}`,
  method: 'GET'
})