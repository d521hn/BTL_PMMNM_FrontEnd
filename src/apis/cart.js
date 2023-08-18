import axios from "axios";
import { portUrl } from "../ultils/containts";

//Call Api get band
export const apiGetBrand = () => axios({
  url: `${portUrl}/brands`,
  method: 'GET'
})