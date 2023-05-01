"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronJobManager = void 0;
class CronJobManager {
    constructor() {
        this.resetInvoiceGenerationDateJob();
    }
    static getInstance() {
        if (!CronJobManager.instance) {
            CronJobManager.instance = new CronJobManager();
        }
        return CronJobManager.instance;
    }
    resetInvoiceGenerationDateJob() {
    }
}
exports.CronJobManager = CronJobManager;
