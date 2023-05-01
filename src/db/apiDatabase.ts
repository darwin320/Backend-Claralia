import { Api, PrismaClient } from "@prisma/client";

import { withPrismaClient } from "./database";

export namespace ApiDatabase {
  

    export async function getApi(name: string): Promise<Api | null> {
        return await withPrismaClient<Api | null>(
            async (prisma: PrismaClient) => {
                const api = await prisma.api.findUnique({
                    where: {
                        name,
                    },
                });
                return api ?? null;
            }
        );
    }

    export async function getApis(): Promise<Api[]> {
        return await withPrismaClient<Api[]>(async (prisma: PrismaClient) => {
            const apis = await prisma.api.findMany();

            return apis;
        });
    }


 

}
