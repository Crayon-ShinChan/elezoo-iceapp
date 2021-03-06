import { createApp, history } from 'ice';

const appConfig = {
  app: {
    rootId: 'ice-container',
    // 可选，是否解析路由组件的查询参数
    parseSearchParams: true,
  },
  request: [
    {
      baseURL: 'http://127.0.0.1:7001/api/',
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt-token')}` },
      interceptors: {
        request: {
          onConfig: (config) => {
            // console.log('config', config);
            if (
              localStorage.hasOwnProperty('jwt-token') === false &&
              config.url !== '/user/create' &&
              config.url !== '/vote/accept' &&
              config.url !== '/user/forget' &&
              !config.url.match('/user/reset')
            ) {
              history.push('/user/login');
            }
            config.headers = {
              Authorization: `Bearer ${localStorage.getItem('jwt-token')}`,
            };
            return config;
          },
        },
        response: {
          onConfig: (response) => {
            // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
            return response.data;
          },
        },
      },
    },
  ],
};
createApp(appConfig);
