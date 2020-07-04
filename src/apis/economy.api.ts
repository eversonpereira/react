import { configs } from './../configs/index';
import axios from 'axios';

export const getPrice = () => {
  return axios.request({ method: 'GET', url: configs.apis.economia })
}