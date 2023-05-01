"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigApiEndpoint = void 0;
const apiEndpoint_1 = require("../api/apiEndpoint");
class ConfigApiEndpoint extends apiEndpoint_1.ApiEndpoint {
    getElementsType(app) {
        // throw new Error("Method not implemented.");
    }
    constructor() {
        super("config");
    }
    getElements(app) { }
    searchElements(app) { }
    getElementById(app) { }
    createElement(app) { }
    updateElement(app) { }
    deleteElement(app) { }
    registerCustomMethods(app) {
    }
}
exports.ConfigApiEndpoint = ConfigApiEndpoint;
