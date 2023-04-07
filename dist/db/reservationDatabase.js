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
exports.ReservationDatabase = void 0;
const client_1 = require("@prisma/client");
const database_1 = require("./database");
var ReservationDatabase;
(function (ReservationDatabase) {
    function getReservations() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                return yield prisma.reservacion.findMany();
            }));
        });
    }
    ReservationDatabase.getReservations = getReservations;
    function getTypeEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                return yield Object.values(client_1.TypeEvent);
            }));
        });
    }
    ReservationDatabase.getTypeEvent = getTypeEvent;
    function getTypeSalon() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                return yield Object.values(client_1.TypeSalon);
            }));
        });
    }
    ReservationDatabase.getTypeSalon = getTypeSalon;
    function getReservationById(reservationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                return yield prisma.reservacion.findUnique({
                    where: {
                        id: reservationId,
                    },
                });
            }));
        });
    }
    ReservationDatabase.getReservationById = getReservationById;
    function searchReservation(search = "", skip, take) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                let whereQuery = null;
                if (search.length > 0) {
                    whereQuery = {
                        OR: [
                            {
                                nameClient: {
                                    contains: search,
                                },
                            },
                        ],
                    };
                }
                const serviceCount = yield prisma.reservacion.count({
                    where: whereQuery !== null && whereQuery !== void 0 ? whereQuery : {},
                });
                const reservacions = yield prisma.reservacion.findMany({
                    where: whereQuery !== null && whereQuery !== void 0 ? whereQuery : {},
                    skip: skip !== null && skip !== void 0 ? skip : 0,
                    take: take !== null && take !== void 0 ? take : database_1.SEARCH_AMOUNT,
                });
                return {
                    search: reservacions,
                    searchCount: serviceCount,
                };
            }));
        });
    }
    ReservationDatabase.searchReservation = searchReservation;
})(ReservationDatabase = exports.ReservationDatabase || (exports.ReservationDatabase = {}));
