"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureApiModule = exports.REGISTERED_APIS = void 0;
exports.REGISTERED_APIS = [];
//CONFIGURA MODULIS
function configureApiModule(app) {
    for (const api of exports.REGISTERED_APIS) {
        api.registerMethods(app);
    }
}
exports.configureApiModule = configureApiModule;
