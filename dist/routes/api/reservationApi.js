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
exports.ReservationApiEndpoint = void 0;
const audit_1 = require("../../audit/audit");
const reservationDatabase_1 = require("../../db/reservationDatabase");
const apiEndpoint_1 = require("../api/apiEndpoint");
const auth_1 = require("../auth");
class ReservationApiEndpoint extends apiEndpoint_1.ApiEndpoint {
    constructor() {
        super("reservations");
    }
    getElements(app) {
        app.get(this.getUrl(), auth_1.authorize, auth_1.authorizeOnRole, (_request, response) => __awaiter(this, void 0, void 0, function* () {
            const result = yield reservationDatabase_1.ReservationDatabase.getReservations();
            response.send(result);
        }));
    }
    getElementsType(app) {
        //throw new Error("Method not implemented.");
        app.post(this.getUrlWithExtension("typeSalon"), auth_1.authorize, auth_1.authorizeOnRole, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const result = yield reservationDatabase_1.ReservationDatabase.getTypeSalon();
            response.send(result);
        }));
    }
    searchElements(app) {
        //throw new Error("Method not implemented.");
        app.post(this.getUrlWithExtension("search"), auth_1.authorize, auth_1.authorizeOnRole, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const search = request.body.userSearch;
            const skip = request.body.skip;
            const take = request.body.take;
            const result = yield reservationDatabase_1.ReservationDatabase.searchReservation(search, skip, take);
            response.send(result);
        }));
    }
    getElementById(app) {
        //throw new Error("Method not implemented.");
        app.get(this.getUrlWithExtension(":reservationId"), auth_1.authorize, auth_1.authorizeOnRole, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const reservationId = parseInt(request.params["reservationId"]);
            const result = yield reservationDatabase_1.ReservationDatabase.getReservationById(reservationId);
            response.send(result);
        }));
    }
    createElement(app) {
        app.post(this.getUrlWithExtension("create"), auth_1.authorize, auth_1.authorizeOnRole, audit_1.logMotion, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const result = yield reservationDatabase_1.ReservationDatabase.createReservation({
                idUser: request.body.idUser,
                nameClient: request.body.nameClient,
                salon: request.body.salon,
                cantidadAdultos: request.body.cantidadAdultos,
                cantidadNinos: request.body.cantidadNinos,
                fecha: request.body.fecha,
                fechaFin: request.body.fechaFin,
                horaInicio: request.body.horaInicio,
                horaFin: request.body.horaFin,
                tipoEvento: request.body.tipoEvento,
                downPayment: request.body.downPayment,
                priceRoomPerHour: request.body.priceRoomPerHour,
                inventory: request.body.inventory
            });
            response.send(result);
        }));
        // throw new Error("Method not implemented.");
    }
    updateElement(app) {
        app.put(this.getUrlWithExtension("update/:reservationId"), auth_1.authorize, auth_1.authorizeOnRole, audit_1.logMotion, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const reservationId = parseInt(request.params["reservationId"]);
            const changes = request.body;
            const result = yield reservationDatabase_1.ReservationDatabase.updateReservationById(reservationId, changes);
            response.send(result);
        }));
        //throw new Error("Method not implemented.");
    }
    deleteElement(app) {
        app.delete(this.getUrlWithExtension("delete/:ReservationId"), auth_1.authorize, auth_1.authorizeOnRole, audit_1.logMotion, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const reservationId = parseInt(request.params["ReservationId"]);
            const result = yield reservationDatabase_1.ReservationDatabase.deleteReservationById(reservationId);
            response.send(result);
        }));
        //throw new Error("Method not implemented.");
    }
    registerCustomMethods(app) {
        // throw new Error("Method not implemented.");
        app.post(this.getUrlWithExtension("typeEvent"), auth_1.authorize, auth_1.authorizeOnRole, (request, response) => __awaiter(this, void 0, void 0, function* () {
            const result = yield reservationDatabase_1.ReservationDatabase.getTypeEvent();
            response.send(result);
        }));
    }
}
exports.ReservationApiEndpoint = ReservationApiEndpoint;
