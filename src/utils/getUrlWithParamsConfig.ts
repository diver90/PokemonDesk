import config, {ConfigEndpointKeyType} from '../config';

function getUrlWithParamsConfig(endpointCofig: string, query: object) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpointCofig as ConfigEndpointKeyType].uri,
        query: {
            ...query
        }
    };

    return url;
}

export default getUrlWithParamsConfig;