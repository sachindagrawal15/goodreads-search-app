"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class BaseConfigApi {
    constructor() { }
    get(url, params) {
        let _config = {};
        _config.params = params || {};
        _config = this.prepareConfig('get', _config);
        return axios_1.default.get(url, _config);
    }
    post(url, data, headers) {
        let _config = this.prepareConfig('post', {});
        _config.headers = headers || {};
        return axios_1.default.post(url, data, _config);
    }
    prepareConfig(method, config) {
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
exports.default = BaseConfigApi;
//# sourceMappingURL=BaseConfigApi.js.map