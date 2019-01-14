import axios from "axios";

declare var Settings: any;

export default class BaseConfigApi {

    constructor() {}

    public get(url: string, params?: any): Promise<any> {
        let _config: any = {};
        _config.params = params || {};
        _config = this.prepareConfig('get', _config);
        return axios.get(url, _config);
    }

    public post(url: string, data?: any, headers?: any): Promise<any> {
        let _config = this.prepareConfig('post', {});
        _config.headers = headers || {};
        return axios.post(url, data, _config);
    }

    private prepareConfig(method: string, config: any){
        config.params = config.params || {};
        const baseURL = Settings.services.baseUrl;

        return Object.assign({}, config, {
            baseURL: baseURL,
            timeout: Settings.services.timeout,
            responseType: 'json',
            withCredentials: true
        });

    }

}