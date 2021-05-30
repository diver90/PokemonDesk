import config, {ConfigEndpointKeyType} from '../config';

function getUrlWithParamsConfig(endpointCofig: string, query: any) {
    let url = {
        ...config.client.server,
        ...config.client.endpoint[endpointCofig as ConfigEndpointKeyType].uri,
        query: {}
    };

    const pathname = Object.keys(query).reduce((acc, value)=> {
        if (acc.indexOf(`{${value}}`) !== -1){
            const result = acc.replace(`{${value}}`, query[value]);
            delete query[value];
            return result;
        }
        return acc;
    }, url.pathname);

    url.pathname = pathname;
    url.query = {
        ...query
    }

    return url;
}

export default getUrlWithParamsConfig;