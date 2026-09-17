---
title: axios二次封装
date: 2024-06-25 09:29:51
order: 2
category:
  - 前端
  - 工具库
tag:
  - axios
  - http
---

# axios 二次封装

## 基础封装

首先进行基础封装，http 目录下创建 request/index.ts 文件

```ts
import axios from 'axios';
import type {} from 'axios';
import { AxiosRequestConfig } from 'axios';
import { AxiosInstance } from 'axios';

class Request {
  // axios实例
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
```

这里封装成一个类，类可以创建多个实例，使用范围更广。

## 拦截器封装

拦截器分三中：

- 类拦截器
- 实例拦截器
- 接口拦截器

### 类拦截器

类拦截器比较简单，在类中对 `axios.create()` 创建的实例调用 `interceptors` 下的两个拦截器即可

```ts
class Request {
  // axios实例
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 类请求拦截
    this.instance.interceptors.request.use(
      (res: InternalAxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      },
      (err) => err
    );

    // 类响应拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');
        return res.data;
      },
      (err) => err
    );
  }
}
```

### 实例拦截器

实例拦截器是为了为了灵活性，为了处理不同类型的拦截操作

先定义下 interface

```ts
import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}
```

将拦截器扩展到 `AxiosRequestConfig` 中，并在 `Request` 中使用拦截器

```ts {9,14-17,19,29-39}
import axios from 'axios';
import type {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from 'axios';

import type { RequestInterceptors, RequestConfig } from './types';

class Request {
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    // 类请求拦截
    this.instance.interceptors.request.use(
      (res: InternalAxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      }
    );

    // 实例请求拦截
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );

    // 实例响应拦截
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    // 类响应拦截
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      console.log('全局响应拦截器');
      return res.data;
    });
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
```

### 接口拦截

现在对单一接口进行拦截操作，对 request 方法进行改造

```ts{16-38}
import axios from 'axios';
import type {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from 'axios';

import type { RequestInterceptors, RequestConfig } from './types';

class Request {
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors;

  request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(
          config as InternalAxiosRequestConfig
        );
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }

          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}
```

调整下 types

```ts{8}
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
```

## 封装请求方法

用封装好的 `Request` 创建实例，并封装不同类型的请求，这里以 http/index.ts 为例

```ts
interface HTTPRequestConfig {
  (url: string, data: any, contentType?: string): any;
}

const AJ = 'application/json';
const AXC = 'application/x-www-form-urlencoded;charset=UTF-8';

const request = new Request({
  timeout: 1000 * 60 * 1,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log('实例请求拦截器');
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log('实例响应拦截器');
      return result;
    },
  },
});
export const $post: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  return request.request({
    method: 'post',
    url,
    data,
    headers: { 'Content-Type': ct },
  });
};

export const $get: HTTPRequestConfig = function (url, data, contentType) {
  const ct = contentType || AXC;
  data = data || {};
  return request.request({
    method: 'get',
    url,
    params: data,
    headers: {
      'Content-Type': ct,
    },
  });
};

export const $delete: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AXC;
  data = data || {};
  return request.request({
    method: 'delete',
    url,
    params: data,
    headers: {
      'Content-Type': ct,
    },
  });
};

export const $put: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  data = data || {};
  return request.request({
    method: 'put',
    url,
    data,
    headers: { 'Content-Type': ct },
  });
};

export const $getBlob: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AXC;
  data = data || {};
  return request.request({
    method: 'get',
    url,
    params: data,
    responseType: 'blob',
    headers: {
      'Content-Type': ct,
    },
  });
};

export const $postBlob: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  return request.request({
    method: 'post',
    url,
    data,
    responseType: 'blob',
    headers: { 'Content-Type': ct },
  });
};

export const $postArraybuffer: HTTPRequestConfig = (url, data, contentType) => {
  const ct = contentType || AJ;
  return request.request({
    method: 'post',
    url,
    data,
    responseType: 'arraybuffer',
    headers: { 'Content-Type': ct },
  });
};
```

### 使用接口请求

这里以 vue 为实例项目，在 src 下新增 api 文件夹存放接口请求文件

```ts
// api/serve/index.ts
import { $get, $post } from '@/http';

export function httpGetData(params: any) {
  return $get('/api/getData', params);
}

export function httpPostAdd(params: any) {
  return $post('/api/add', params);
}
```

在 vue 中调用接口

```vue
<script lang="ts" setup>
import { httpGetData } from '@/api/serve';

const getData = async () => {
  const params = {
    name: '',
  };
  const res = await httpGetData(params);
  if (res.code === 200) {
    console.log(`请求成功：${res.data}`);
  }
};
</script>
```

## 取消请求

什么是取消请求可参考[官方文档](https://axios-http.com/zh/docs/cancellation)

### 准备工作

需要将所有请求的取消方法保存到一个集合，然后根据具体需要去调用这个集合中的某个取消请求方法。

```ts{6-9,15-17}
class Request {
  // axios实例
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: RequestInterceptors;
  // 存放取消方法的集合
  cancelRequestSourceList?: CancelRequestSource[];
  // 存放所有请求URL的集合
  requestUrlList?: string[];

  constructor(config: RequestConfig) {
    // 记录axios实例
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    // 数据初始化
    this.cancelRequestSourceList = [];
    this.requestUrlList = [];
  }
}
```

定义 `CancelRequestSource`

```ts
// types.ts
export interface CancelRequestSource {
  [index: string]: () => void;
}
```

### 取消请求方法的添加与删除

这里需要在 `request` 中，在请求之前将 url 和取消请求方法 `push` 到我们前面定义的两个属性中，然后在请求完毕后（不管是失败还是成功）都将其进行删除

```ts{2-28,38-46,60-62}
class Request {
  /**
   * @description: 取消所有请求
   * @returns {*}
   */
  public cancelAllRequest() {
    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }

  /**
   * @description: 取消指定 url 的请求
   * @param {string | string[]} url
   * @returns {*}
   */
  public cancelRequest(url: string | string[]) {
    if (typeof url === 'string') {
      const sourceIndex = this.getSourceIndex(url) as number;
      sourceIndex !== -1 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u) as number;
        sourceIndex !== -1 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }

  public request<T>(config: RequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(
          config as InternalAxiosRequestConfig
        );
      }
      const { url } = config;
      if (url) {
        this.requestUrlList?.push(url);
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.push({
            [url]: c,
          });
        });
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors<T>(res);
          }

          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        })
        .finally(() => {
          url && this.delUrl(url);
        });
    });
  }
}
```
