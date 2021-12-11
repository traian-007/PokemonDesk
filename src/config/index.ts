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
      getPokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      getPokemon2: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemonTypes: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/types',
        },
      },
      // Fake API
      createPokemon: {
        method: 'POST',
        uri: {
          pathname: '/api/v1/pokemon/create',
        },
      },
      updatePokemon: {
        method: 'PATCH',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
      deletePokemon: {
        method: 'DELETE',
        uri: {
          pathname: '/api/v1/pokemon/{id}/delete',
        },
      },
    },
  },
};
export default config;
