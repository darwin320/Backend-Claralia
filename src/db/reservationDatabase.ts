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


}