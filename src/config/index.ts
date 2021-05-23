interface IServer {
  protocol: string;
  host: string;
}
export interface IEndPoint {
  [n: string]: IUriEndPoint;
}
export interface IUriEndPoint {
  method: string;
  uri: { pathname: string };
}

interface IClient {
  server: IServer;
  endpoint: IEndPoint;
}

export interface IConfig {
  client: IClient;
}

export const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};
export default config;
