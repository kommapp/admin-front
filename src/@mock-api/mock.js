import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance, { delayResponse: 0, onNoMatch: 'passthrough' });
export default mock;
