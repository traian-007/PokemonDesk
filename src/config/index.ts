interface IServer {
  protocol: string;
  host: string;
}
export interface IEndPoint {
  [n: string]: IUriEndPoint;
}
export interface IUriEndPoint {
  method: string;
  uri: any;
}

interface IClient {
  server: IServer;
  endpoint: IEndPoint;
}

export interface IConfig {
  client: IClient;
}
const query = {
  name: '',
  id: 2,
};
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
      getPokemonsById: {
        method: 'GET',
        uri: {
          pathname: `/api/v1/pokemon/${query.id}`,
        },
      },
    },
  },
};
export default config;
