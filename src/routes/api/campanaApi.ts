import { CamapanaDatabase } from "../../db/campanaDatabase";
import { ApiEndpoint } from "./apiEndpoint";
import { Request, Response } from "express";

export class CamapanaApiEndpoint extends ApiEndpoint {
    constructor() {
        super("campana");
    }
    public getElements(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public searchElements(app: any): void {
        app.post(
            this.getUrlWithExtension("search"),
            async (request: Request, response: Response) => {
                const search = request.body.userSearch;
                const skip = request.body.skip;
                const take = request.body.take;

                const result = await CamapanaDatabase.searchCampana(
                    search,
                    skip,
                    take
                );
                response.send(result);
            }
        );
    }
    public getElementById(app: any): void {
        app.get(
            this.getUrlWithExtension("campana/:campanaId"),
            async (request: Request, response: Response) => {
                const camapanId = parseInt(request.params["campanaId"]);

                const result = await CamapanaDatabase.getCampanaById(camapanId, true);
                response.send(result);
            }
        );
    }
    public createElement(app: any): void {
        app.post(
            this.getUrlWithExtension("create"),
            async (request: Request, response: Response, next: any) => {
                const result = await CamapanaDatabase.createCampana(request.body);
                response.locals.result = result;
                next();
            },
            this.sendObjectResponse
        );
    }
    public updateElement(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public deleteElement(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public registerCustomMethods(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public getElementsType(app: any): void {
       // throw new Error("Method not implemented.");
    }
    

}