import config, {ConfigEndpointKeyType} from '../config';

function getUrlWithParamsConfig(endpointCofig: string) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpointCofig as ConfigEndpointKeyType].uri
    }
    return url;
}

export default getUrlWithParamsConfig;