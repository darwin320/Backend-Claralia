import { Request, Response } from "express";
import { ApiEndpoint } from "../api/apiEndpoint";

export class ActionsApiEndpoint extends ApiEndpoint {
    public getElementById(app: any): void {
        //throw new Error("Method not implemented.");
    }
    public getElementsType(app: any): void {
        //throw new Error("Method not implemented.");
    }
    constructor() {
        super("actions");
    }

    public searchElements(app: any): void {

    }

    public createElement(app: any): void {

    }

    public updateElement(app: any): void {

    }

    public getElements(app: any): void {

    }

    public deleteElement(app: any): void {
        app.delete((_request: Request, response: Response) => {
            response.sendStatus(403);
        });
    }

    public registerCustomMethods(_app: any): void {}
}
