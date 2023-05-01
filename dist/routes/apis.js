"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureApiModule = exports.REGISTERED_APIS = void 0;
const campanaApi_1 = require("./api/campanaApi");
exports.REGISTERED_APIS = [
    new campanaApi_1.CamapanaApiEndpoint()
];
//CONFIGURA MODULIS
function configureApiModule(app) {
    for (const api of exports.REGISTERED_APIS) {
        api.registerMethods(app);
    }
}
exports.configureApiModule = configureApiModule;
