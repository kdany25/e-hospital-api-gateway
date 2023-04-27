import { MedicalService } from "./medical.service";
import { Response } from "express";
export declare class MedicalController {
    private readonly medicalService;
    constructor(medicalService: MedicalService);
    healthCheck(res: any): Promise<any>;
    getAllDoctors(res: any): Promise<any>;
    getAllPharmacists(res: any): Promise<any>;
    getMedicalRecords(res: any, query: any): Promise<any>;
    populateMedicalRecords(res: any): Promise<any>;
    assignDoctor(payload: any, res: any): Promise<any>;
    assignPharmacy(payload: any, res: any): Promise<any>;
    assignConsultation(payload: any, res: any): Promise<any>;
    addMedicine(payload: any, res: any): Promise<any>;
    createSymptoms(payload: any, res: any): Promise<any>;
    getAllMedecines(res: any): Promise<any>;
    uploadMedecine(payload: any, res: any): Promise<any>;
    prescribeMedecine(payload: any, res: any): Promise<any>;
    downloadCsv(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
}
