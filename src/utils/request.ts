import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetUrlWithParamsConfig {
  method: string;
  uri: Partial<URL>;
  body: object;
}

async function req<T>(endpoint: string, query: object): Promise<T> {
  const { method, uri, body }: IGetUrlWithParamsConfig = getUrlWithParamsConfig(endpoint, query);
  // const uri = url.format(getUrlWithParamsConfig(endpoint, query));
  const options: IOptions = {
    method,
  };
  // const uri = url.format({
  //     protocol: 'https',
  //     host: 'zarmarathon.com',
  //     query: {
  //         name: 'Zar'
  //     }
  // })
  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }
  const respons = await fetch(Url.format(uri), options).then((res) => res.json());
  return respons;
}

export default req;
