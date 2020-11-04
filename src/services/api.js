import { create } from 'apisauce';
import { de } from 'date-fns/esm/locale';

const api = create({
  baseURL: 'https://vizinho-solidario.herokuapp.com/',
});

export default api;
