export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru'
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                uri: {
                    pathname: '/api/v1/pokemons',
                }
            },
           getPokemon: {
               method: 'GET',
               uri: {
                   pathname: '/api/v1/pokemon/{id}',
               }
           },
            postPokemon: {
                method: 'POST',
                uri: {
                    pathname: '/api/v1/pokemon/{id}',
                }
            },
            getTypes: {
                method: 'POST',
                uri: {
                    pathname: '/api/v1/types',
                }
            }
        }
    }
};

export type ConfigEndpointKeyType = keyof typeof config.client.endpoint;
export default config;