import axios from "axios";
import { portUrl } from "../ultils/containts";

export const apiGetProducs = () => axios({
  url: `${portUrl}/products`,
  method: 'GET'
})