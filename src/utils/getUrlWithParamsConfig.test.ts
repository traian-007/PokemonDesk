import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('must take two arguments "getPokemon" and an empty object, at the output get an object with fields pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });
  test('must take two arguments "getPokemon" and {name: "Pikachu"}, at the output get an object with fields pathname, protocol, host and query with name: "pikachu"', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });
  test('must take two arguments "getPokemon" and {id: 25}, at the output get an object with fields pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25',
        query: {},
      },
      body: {},
    });
  });
  test('must take two arguments "getPokemon" and {id: 25}, at the output get an object with fields pathname, protocol, host and empty query', () => {
    const url = getUrlWithParamsConfig('deletePokemon', { id: 25 });

    expect(url).toEqual({
      method: 'DELETE',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemon/25/delete',
        query: {},
      },
      body: { id: 25 },
    });
  });
});
