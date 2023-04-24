import { Request, Response } from "express";
import { Ok } from "ts-results";
import { CronJobManager } from "../../cron/cron";
import { ApiEndpoint } from "../api/apiEndpoint";


export type InvoiceConfigDto = {
    date: Date;
};

export class ConfigApiEndpoint extends ApiEndpoint {
    public getElementsType(app: any): void {
       // throw new Error("Method not implemented.");
    }
    constructor() {
        super("config");
    }

    public getElements(app: any): void {}

    public searchElements(app: any): void {}

    public getElementById(app: any): void {}

    public createElement(app: any): void {}

    public updateElement(app: any): void {}

    public deleteElement(app: any): void {}

    public registerCustomMethods(app: any): void {

    }
}
