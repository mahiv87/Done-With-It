import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'http://192.168.0.60:9000/api'
});

export default apiClient;
