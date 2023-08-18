import axios from "axios";
import { portUrl } from "../ultils/containts";

//Call Api get band
export const apiGetBlogs = () => axios({
  url: `${portUrl}/posts`,
  method: 'GET'
})