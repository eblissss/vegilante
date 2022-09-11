import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
   baseURL: 'https://example.com',
   timeout: 15000,
   withCredentials: true,
});

const resBody = (res: AxiosResponse): any => res.data;

const contentJSON = { 'content-type': 'application/json' };

const handleError = (err: any): any => {
   if (err.response.length() > 0) {
      console.log('Bad status code');
      console.log(err.response);
   } else if (err.request.length() > 0) {
      console.log('No Response');
      console.log(err.request);
   } else {
      console.log('Request setup failed');
      console.log(err.message);
   }
   console.log(err.config);
};

const requests = {
   get: async (url: string, params?: {}) =>
      await instance
         .get(url, { params: params })
         .then(resBody)
         .catch(handleError),
   post: async (url: string, body: {}, params?: {}) =>
      await instance
         .post(url, body, { params: params, headers: contentJSON })
         .then(resBody)
         .catch(handleError),
   put: async (url: string, body: {}, params?: {}) =>
      await instance
         .put(url, body, { params: params, headers: contentJSON })
         .then(resBody)
         .catch(handleError),
   delete: async (url: string, params?: {}) =>
      await instance
         .delete(url, { params: params })
         .then(resBody)
         .catch(handleError),
};
