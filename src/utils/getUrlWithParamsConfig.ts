import config from '../config';

interface IApiConfigUri {
  host: string;
  protocol: string;
  pathname: string;
  query?: object;
}
interface IEndpoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

// type TypePath = (a: object, b: string) => any
// export const getPathname: TypePath = (query, startPoint) => {
//   Object.keys(query).reduce((acc, val) => {
//     if (acc.indexOf(`{${val}}`) !== -1) {
//       const result = acc.replace(`{${val}}`, query[val as keyof typeof query])
//       delete query[val as keyof typeof query]
//       return result;
//     }
//     return acc;
//   }, startPoint);
// }

function getUrlWithParamsConfig(endpointConfig: string, params: any) {
  const { method, uri }: IEndpoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];

  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = {
    ...params,
  };
  // const url = {
  //   ...config.client.server,
  //   ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
  //   query: {},
  // };
  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val as keyof typeof query]);
      if (method === 'GET') {
        delete query[val as keyof typeof query];
      }
      return result;
    }
    return acc;
  }, apiConfigUri.pathname);
  apiConfigUri.pathname = pathname;
  // apiConfigUri.pathname = getPathname(query, apiConfigUri.pathname)

  // apiConfigUri.query = {...query};

  if (method === 'GET') {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query,
    };
  } else {
    body = query;
  }
  return {
    method,
    uri: apiConfigUri,
    body,
  };
}

export default getUrlWithParamsConfig;
