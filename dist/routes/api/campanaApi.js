"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamapanaApiEndpoint = void 0;
const campanaDatabase_1 = require("../../db/campanaDatabase");
const apiEndpoint_1 = require("./apiEndpoint");
class CamapanaApiEndpoint extends apiEndpoint_1.ApiEndpoint {
    constructor() {
        super("campana");
    }
    getElements(app) {
        //throw new Error("Method not implemented.");
    }
    searchElements(app) {
        app.post(this.getUrlWithExtension("search"), (request, response) => __awaiter(this, void 0, void 0, function* () {
            const search = request.body.userSearch;
            const skip = request.body.skip;
            const take = request.body.take;
            const result = yield campanaDatabase_1.CamapanaDatabase.searchCampana(search, skip, take);
            response.send(result);
        }));
    }
    getElementById(app) {
        app.get(this.getUrlWithExtension("campana/:campanaId"), (request, response) => __awaiter(this, void 0, void 0, function* () {
            const camapanId = parseInt(request.params["campanaId"]);
            const result = yield campanaDatabase_1.CamapanaDatabase.getCampanaById(camapanId, true);
            response.send(result);
        }));
    }
    createElement(app) {
        app.post(this.getUrlWithExtension("create"), (request, response, next) => __awaiter(this, void 0, void 0, function* () {
            const result = yield campanaDatabase_1.CamapanaDatabase.createCampana(request.body);
            response.locals.result = result;
            next();
        }), this.sendObjectResponse);
    }
    updateElement(app) {
        //throw new Error("Method not implemented.");
    }
    deleteElement(app) {
        //throw new Error("Method not implemented.");
    }
    registerCustomMethods(app) {
        //throw new Error("Method not implemented.");
    }
    getElementsType(app) {
        // throw new Error("Method not implemented.");
    }
}
exports.CamapanaApiEndpoint = CamapanaApiEndpoint;
