export default class BaseConfigApi {
    constructor();
    get(url: string, params?: any): Promise<any>;
    post(url: string, data?: any, headers?: any): Promise<any>;
    private prepareConfig;
}
