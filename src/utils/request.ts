import Url from "url";
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string) {
    const uri = Url.format(getUrlWithParamsConfig(endpoint))
    console.log(uri);
    return await fetch(uri).then((res) => res.json());
}

export default req;