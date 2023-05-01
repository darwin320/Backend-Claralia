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
exports.CamapanaDatabase = void 0;
const database_1 = require("./database");
const errors_1 = require("../models/errors/errors");
const ts_results_1 = require("ts-results");
var CamapanaDatabase;
(function (CamapanaDatabase) {
    function createCampana(userInformation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield prisma.campanasCRM.create({
                        data: {
                            Nombre: userInformation.nombre,
                            Apellido: userInformation.apellido,
                            Telefono: userInformation.telefono,
                            Direccion: userInformation.direccion,
                            CampanaCode: userInformation.campanaCode,
                            Fecha: userInformation.fecha
                        },
                    });
                    return (0, ts_results_1.Ok)(user);
                }
                catch (error) {
                    return (0, ts_results_1.Err)(errors_1.Errors.getErrorFromCode(error.code));
                }
            }));
        });
    }
    CamapanaDatabase.createCampana = createCampana;
    function searchCampana(search = "", skip, take) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                let whereQuery = null;
                if (search.length > 0) {
                    whereQuery = {
                        OR: [
                            {
                                Nombre: {
                                    contains: search,
                                },
                            },
                            {
                                Apellido: {
                                    contains: search,
                                },
                            },
                            {
                                Telefono: {
                                    contains: search,
                                },
                            },
                        ],
                    };
                }
                const campanaCount = yield prisma.campanasCRM.count({
                    where: whereQuery !== null && whereQuery !== void 0 ? whereQuery : {},
                });
                const campanas = yield prisma.campanasCRM.findMany({
                    where: whereQuery !== null && whereQuery !== void 0 ? whereQuery : {},
                    skip: skip !== null && skip !== void 0 ? skip : 0,
                    take: take !== null && take !== void 0 ? take : database_1.SEARCH_AMOUNT,
                });
                return {
                    search: campanas,
                    searchCount: campanaCount,
                };
            }));
        });
    }
    CamapanaDatabase.searchCampana = searchCampana;
    function getCampanaById(id, withRole = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, database_1.withPrismaClient)((prisma) => __awaiter(this, void 0, void 0, function* () {
                return yield prisma.campanasCRM.findUnique({
                    where: {
                        id,
                    },
                });
            }));
        });
    }
    CamapanaDatabase.getCampanaById = getCampanaById;
})(CamapanaDatabase = exports.CamapanaDatabase || (exports.CamapanaDatabase = {}));
