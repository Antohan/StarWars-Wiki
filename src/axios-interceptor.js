import axios from 'axios';

axios.interceptors.response.use(
  succcess => succcess,
  (error) => {
    const { status, response: { data } } = error;

    if (status === 401) {
      // logic of refresh token
    }

    return Promise.reject(data);
  },
);
