import axios from 'axios';

const API_URL = 'http://localhost:8080/api/results';

export const fetchResults = async () => {
  const response = await axios.get(API_URL, {
    auth: {
      username: 'admin',
      password: 'admin',
    },
  });
  return response.data;
};

export const exportPDF = () => {
  window.open(`${API_URL}/export/pdf`, '_blank');
};
