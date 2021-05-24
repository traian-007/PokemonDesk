import url from 'url';
import getUrlWithParamsConfig from '../config/getUrlWithParamsConfig';

async function req(endpoint: string) {
  const uri = url.format(getUrlWithParamsConfig(endpoint));
  // const uri = url.format({
  //     protocol: 'https',
  //     host: 'zarmarathon.com',
  //     query: {
  //         name: 'Zar'
  //     }
  // })
  const respons = await fetch(uri).then((res) => res.json());
  return respons;
}

export default req;
