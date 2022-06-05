import apiConfig from '../../config/api/apiConfig';
import queryString from 'query-string';

const apiService = {
  getProductPage: (page) => {
    const pageApi = queryString.stringify(page);
    console.log('🚀 ~ file: apiServics.js ~ line 7 ~ pageApi', pageApi);
    const url = `/product/?${pageApi}`;

    return apiConfig.get(url);
  },
};

export default apiService;
