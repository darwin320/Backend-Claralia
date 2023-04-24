"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsApiEndpoint = void 0;
const apiEndpoint_1 = require("../api/apiEndpoint");
class ActionsApiEndpoint extends apiEndpoint_1.ApiEndpoint {
    getElementById(app) {
        throw new Error("Method not implemented.");
    }
    getElementsType(app) {
        //throw new Error("Method not implemented.");
    }
    constructor() {
        super("actions");
    }
    searchElements(app) {
    }
    createElement(app) {
    }
    updateElement(app) {
    }
    getElements(app) {
    }
    deleteElement(app) {
        app.delete((_request, response) => {
            response.sendStatus(403);
        });
    }
    registerCustomMethods(_app) { }
}
exports.ActionsApiEndpoint = ActionsApiEndpoint;
