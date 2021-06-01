import config from '../config';

interface IApiconfigUri {
    host: string,
    protocol: string,
    pathname: string,
    query?: object
}

interface IEndpoint {
    method: string,
    uri: {
        pathname: string
        query?: object,
    }
}

function getUrlWithParamsConfig(endpointCofig: string, params: object) {
    const {method, uri}: IEndpoint = config.client.endpoint[endpointCofig as keyof typeof config.client.endpoint];
    let body = {};

    const apiConfigUri: IApiconfigUri = {
      ...config.client.server,
      ...uri,
        query: {
          ...uri.query
        }
    };

    const query = {
        ...params,
    }

    const pathname = Object.keys(query).reduce((acc, value)=> {
        if (acc.indexOf(`{${value}}`) !== -1){
            const result = acc.replace(`{${value}}`, query[value as keyof typeof query]);
            delete query[value as keyof typeof query];
            return result;
        }
        return acc;
    }, apiConfigUri.pathname);

    apiConfigUri.pathname = pathname;
    if (method === 'GET') {
        apiConfigUri.query = {
            ...apiConfigUri.query,
            ...query
        };
    } else {
        body = query;
    }

    return {
        method,
        uri: apiConfigUri,
        body
    };
}

export default getUrlWithParamsConfig;