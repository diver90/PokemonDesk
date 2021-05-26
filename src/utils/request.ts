import Url from "url";
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query: object) {
    const uri = Url.format(getUrlWithParamsConfig(endpoint, query))
    console.log(uri);
    return await fetch(uri).then((res) => res.json());
}

export default req;