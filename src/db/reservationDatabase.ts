import {PrismaClient ,Reservacion,TypeSalon,TypeEvent} from "@prisma/client";
import { SearchResult, SEARCH_AMOUNT, withPrismaClient } from "./database";


export namespace ReservationDatabase{

    export async function getReservations() { 
        return await withPrismaClient<Reservacion[]>(
            async (prisma: PrismaClient) => {
                return await prisma.reservacion.findMany();
            }
        );
    }

    export async function getTypeEvent() { 
        return await withPrismaClient<TypeEvent[]>(
            async (prisma: PrismaClient) => {
                return await Object.values(TypeEvent);
            }
        );
    }

    export async function getTypeSalon() { 
        return await withPrismaClient<TypeSalon[]>(
            async (prisma: PrismaClient) => {
                return await Object.values(TypeSalon);
            }
        );
    }

    export async function getReservationById(reservationId: number) {
        return await withPrismaClient<Reservacion | null>(
            async (prisma: PrismaClient) => {
                return await prisma.reservacion.findUnique({
                    where: {
                        id: reservationId,
                    },
                });
            }
        );
    }



    export async function searchReservation(
        search: string = "",
        skip?: number,
        take?: number
    ) {
        return await withPrismaClient<SearchResult<Reservacion>>(
            async (prisma: PrismaClient) => {
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

                const serviceCount = await prisma.reservacion.count({
                    where: whereQuery ?? {},
                });
                const reservacions = await prisma.reservacion.findMany({
                    where: whereQuery ?? {},
                    skip: skip ?? 0,
                    take: take ?? SEARCH_AMOUNT,
                });

                return {
                    search: reservacions,
                    searchCount: serviceCount,
                };
            }
        );
    }

    export async function createReservation(reservationInformation: {
        idUser:number;
        nameClient: string;
        salon: TypeSalon;
        cantidadAdultos: number;
        cantidadNinos: number;
        fecha: string;
        horaInicio: Date;
        horaFin: Date;
        tipoEvento: TypeEvent;
        downPayment: number;
        priceRoomPerHour: number;
    }) {
        return await withPrismaClient<Reservacion | null>(
            async (prisma: PrismaClient) => {
                const service = await prisma.reservacion.create({
                    data: {
                        idUser: reservationInformation.idUser,
                        nameClient: reservationInformation.nameClient,
                        salon : reservationInformation.salon,
                        cantidadAdultos: reservationInformation.cantidadAdultos,
                        cantidadNinos: reservationInformation.cantidadNinos,
                        fecha: reservationInformation.fecha,
                        horaInicio: reservationInformation.horaInicio,
                        horaFin: reservationInformation.horaFin,
                        tipoEvento : reservationInformation.tipoEvento,
                        downPayment: reservationInformation.downPayment,
                        priceRoomPerHour: reservationInformation.priceRoomPerHour
                    },
                });
                return service ?? null;
            }
        );
    }


}