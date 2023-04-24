import { Job, scheduleJob } from "node-schedule";
import { getNextInvoiceGenerationDate } from "../models/config";

export class CronJobManager {
    private static instance: CronJobManager;

    private invoiceGenerationJob?: Job;

    private constructor() {
        this.resetInvoiceGenerationDateJob();
    }

    public static getInstance(): CronJobManager {
        if (!CronJobManager.instance) {
            CronJobManager.instance = new CronJobManager();
        }

        return CronJobManager.instance;
    }

    public resetInvoiceGenerationDateJob() {
    }
}
