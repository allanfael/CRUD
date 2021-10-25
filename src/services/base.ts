import axios from 'axios';

import { store } from '@store';

const baseApi = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers/',
  timeout: 10000,
});

export type methodType =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE'
  | 'HEAD'
  | 'OPTIONS';

interface Params {
  headers?: {
    [val: string]: any;
  };
  endpoint?: string;
  method?: methodType;
  token?: string;
  params?: object;
  data?: object;
  showJSON?: boolean;
  showConsoleLog?: boolean;
  title?: string;
}

const callBaseApi = (call: Params) => {
  const {
    endpoint,
    method = 'GET',
    token = '',
    params = {},
    data = {},
    showConsoleLog = true,
    title = '',
  } = call;
  // Config Headers
  const defaultHeaders = {
    'Client-Device': 'app',
    'Content-Type': 'application/json',
    'Accept-Language': 'pt-BR',
  };

  const headers: any = { ...call.headers, ...defaultHeaders };

  if (token) headers.Authorization = `Bearer ${token}`;

  // Helpers for Debug
  if (showConsoleLog && __DEV__) {
    console.tron.log(`[${title} - CALL API COMPLETE]`, {
      headers,
      method,
      endpoint,
      params,
      data,
    });
  }

  baseApi.interceptors.response.use(
    (response) => {
      if (showConsoleLog && __DEV__) {
      }
      return response;
    },
    (error) => {
      if (showConsoleLog && __DEV__) {
        console.tron.log('error', error);
      }

      return Promise.reject(error);
    }
  );

  if (method === 'GET' || method === 'DELETE') {
    return baseApi(endpoint, {
      params: { ...params },
      headers,
      method,
    });
  }

  return baseApi(endpoint, {
    headers,
    method,
    data,
  });
};

export default callBaseApi;
