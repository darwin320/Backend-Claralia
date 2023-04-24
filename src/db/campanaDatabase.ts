import { PrismaClient, CampanasCRM } from "@prisma/client";
import { SearchResult, SEARCH_AMOUNT, withPrismaClient } from "./database";
import { ErrorResponse, Errors } from "../models/errors/errors";
import { Err, Ok, Result } from "ts-results";
import { DateTime } from "luxon";
import { use } from "passport";


export namespace CamapanaDatabase {
   

    export async function createCampana(userInformation: {
        nombre: string;
        apellido: string;
        telefono: string;
        direccion: string
        campanaCode: string;
        fecha: Date; 
    }): Promise<Result<CampanasCRM, ErrorResponse>> {
        return await withPrismaClient(async (prisma: PrismaClient) => {
            try {
                const user = await prisma.campanasCRM.create({
                    data: {
                        Nombre: userInformation.nombre,
                        Apellido: userInformation.apellido,
                        Telefono: userInformation.telefono,
                        Direccion: userInformation.direccion,
                        CampanaCode: userInformation.campanaCode,
                        Fecha: userInformation.fecha
                    },
                });
                return Ok(user);
            } catch (error: any) {
                return Err(Errors.getErrorFromCode(error.code));
            }
        });
    }
    

    export async function searchCampana(
        search: string = "",
        skip?: number,
        take?: number
    ): Promise<SearchResult<CampanasCRM>> {
        return await withPrismaClient<SearchResult<CampanasCRM>>(
            async (prisma: PrismaClient) => {
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
                const campanaCount = await prisma.campanasCRM.count({
                    where: whereQuery ?? {},
                });
                const campanas = await prisma.campanasCRM.findMany({
                    where: whereQuery ?? {},
                    skip: skip ?? 0,
                    take: take ?? SEARCH_AMOUNT,
                });

                return {
                    search: campanas,
                    searchCount: campanaCount,
                };
            }
        );
    }

    export async function getCampanaById(id: number, withRole = false) {
        return await withPrismaClient(async (prisma: PrismaClient) => {
            return await prisma.campanasCRM.findUnique({
                where: {
                    id,
                },

            });
        });
    }

}