import { Request, Response } from "express";
import { logMotion } from "../../audit/audit";
import { ReservationDatabase } from "../../db/reservationDatabase";
import { ApiEndpoint } from "../api/apiEndpoint";
import { authorize, authorizeOnRole } from "../auth";

export class ReservationApiEndpoint extends ApiEndpoint {


    constructor() {
        super("reservations");
        
    }

    public getElements(app: any): void {
        app.get(
            this.getUrl(),
            authorize,
            authorizeOnRole,
            async (_request: Request, response: Response) => {
                const result = await ReservationDatabase.getReservations();
                response.send(result); 
            }
        );
    }
    public getElementsType(app: any): void {
        //throw new Error("Method not implemented.");
        app.post(
            this.getUrlWithExtension("typeSalon"),
            authorize,
            authorizeOnRole,
            async (request: Request, response: Response) => {
                const result = await ReservationDatabase.getTypeSalon();
                response.send(result);
            }
        );
    }
    public searchElements(app: any): void {
        //throw new Error("Method not implemented.");
        app.post(
            
            this.getUrlWithExtension("search"),
            authorize,
            authorizeOnRole,
            
            async (request: Request, response: Response) => {
                
                const search = request.body.userSearch;
                const skip = request.body.skip;
                const take = request.body.take; 
 
                const result = await ReservationDatabase.searchReservation(
                    search,
                    skip,
                    take
                );
                response.send(result);
            }
        );
    }

    
    public getElementById(app: any): void {
        //throw new Error("Method not implemented.");
        app.get(
            this.getUrlWithExtension(":reservationId"),
            authorize,
            authorizeOnRole,
            async (request: Request, response: Response) => {
                const reservationId = parseInt(request.params["reservationId"]);
                const result = await ReservationDatabase.getReservationById(reservationId);

                response.send(result);
            }
        );
    }
    public createElement(app: any): void {
       // throw new Error("Method not implemented.");
    }
    public updateElement(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public deleteElement(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public registerCustomMethods(app: any): void {
       // throw new Error("Method not implemented.");
       app.post(
        this.getUrlWithExtension("typeEvent"),
        authorize,
        authorizeOnRole,
        async (request: Request, response: Response) => {
            const result = await ReservationDatabase.getTypeEvent();
            response.send(result);
        }
    );
    }
 
}