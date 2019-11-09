import fetch from 'isomorphic-fetch';
import router from 'umi/router';

export const commonFetch = (api: string, opts: any) => {

  return fetch(api, opts)
    .then((res: any) => res)
    .catch((e: any) => {
      // 身份过期 统一转到登录页面
      if (e.code === '502') {
        router.push('/login');
      }
    });
};
