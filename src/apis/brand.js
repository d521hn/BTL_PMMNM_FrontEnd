import axios from "axios";
import { portUrl } from "../ultils/containts";

export const apiGetBrand = () => axios({
  url: `${portUrl}/brands`,
  method: 'GET'
})