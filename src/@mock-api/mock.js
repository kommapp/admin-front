import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});
const mock = new MockAdapter(axiosInstance, { delayResponse: 0, onNoMatch: 'passthrough' });
export default mock;
