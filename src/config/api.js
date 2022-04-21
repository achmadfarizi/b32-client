export const API = () => {
  const baseUrl =
    process.env.REACT_APP_SERVER_URL ||
    'https://b32-dumbmerch2.herokuapp.com/api/v1' ||
    'https://localhost:5008/api/v1';

  const executeAPI = async (endpoint, config) => {
    const response = await fetch(baseUrl + endpoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    patch: executeAPI,
    delete: executeAPI,
  };
};
