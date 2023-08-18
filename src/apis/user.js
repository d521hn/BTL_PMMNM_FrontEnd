import axios from "axios";
import { portUrl } from "../ultils/containts";


export const apiGetUserByEmail = (email) => axios({
  url: `${portUrl}/users/findByEmail/${email}`,
  method: 'GET'
})