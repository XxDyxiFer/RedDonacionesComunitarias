import axios from 'axios';

const API_URL = 'http://localhost:8080/api/donaciones';

export const getDonaciones = () => axios.get(API_URL);
