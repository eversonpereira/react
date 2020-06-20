import { loadingOn, loadingOff } from '../components/loading';
import axios from 'axios';

// interceptors consegue interceptar a requisição para implementar algo.
// dessa maneira toda chamada usando o axios vai carregar o loading ou o que mais estiver dentro do interceptors
axios.interceptors.request.use((config) => {
  loadingOn();
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((config) => {
  loadingOff();
  return config;
}, (error) => {
  loadingOff();
  return Promise.reject(error);
});
