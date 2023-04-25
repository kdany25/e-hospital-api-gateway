"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalController = void 0;
const common_1 = require("@nestjs/common");
const medical_service_1 = require("./medical.service");
require("dotenv").config();
let MedicalController = class MedicalController {
    constructor(medicalService) {
        this.medicalService = medicalService;
    }
    async healthCheck(res) {
        return res.status(common_1.HttpStatus.OK).send("OK");
    }
    async getAllDoctors(res) {
        const { error, data } = await this.medicalService.getAllPhysicians();
        if (error)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async getAllPharmacists(res) {
        const { error, data } = await this.medicalService.getAllPharmacists();
        if (error)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async getMedicalRecords(res, query) {
        const { patientId, physicianId, pharmacistId } = query;
        if (patientId) {
            const { error, data: medicalRecords, } = await this.medicalService.getMedicalRecordsByPatientId(patientId);
            if (error)
                return res
                    .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({ error });
            if (!medicalRecords.length)
                return res
                    .status(common_1.HttpStatus.NOT_FOUND)
                    .json({ error: "No medical records found" });
            return res.status(common_1.HttpStatus.OK).json({ data: medicalRecords });
        }
        if (physicianId) {
            const { error, data: medicalRecords, } = await this.medicalService.getMedicalRecordsByPhysicianId(physicianId);
            if (error)
                return res
                    .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({ error });
            if (!medicalRecords.length)
                return res
                    .status(common_1.HttpStatus.NOT_FOUND)
                    .json({ error: "No medical records found" });
            return res.status(common_1.HttpStatus.OK).json({ data: medicalRecords });
        }
        if (pharmacistId) {
            const { error, data: medicalRecords, } = await this.medicalService.getMedicalRecordsByPharmacistId(pharmacistId);
            if (error)
                return res
                    .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                    .json({ error });
            if (!medicalRecords.length)
                return res
                    .status(common_1.HttpStatus.NOT_FOUND)
                    .json({ error: "No medical records found" });
            return res.status(common_1.HttpStatus.OK).json({ data: medicalRecords });
        }
        const { error, data: medicalRecords, } = await this.medicalService.getMedicalRecords();
        if (error)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        return res.status(common_1.HttpStatus.OK).json({ data: medicalRecords });
    }
    async populateMedicalRecords(res) {
        const { error, data, } = await this.medicalService.populateMedicalRecords();
        if (error)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async assignDoctor(payload, res) {
        const { id, patientId, physicianId } = payload;
        const { error, data, } = await this.medicalService.assignDoctorToMedicalRecord(physicianId, id, patientId);
        if (error)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async assignPharmacy(payload, res) {
        const { id, patientId, pharmacistId } = payload;
        const { error, data, } = await this.medicalService.assignPharmacistToMedicalRecord(pharmacistId, id, patientId);
        if (error)
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ error });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async assignConsultation(payload, res) {
        const { id, physicianId, consultation } = payload;
        const { error, data } = await this.medicalService.addConsultation(id, physicianId, consultation);
        if (error)
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json({ error: error.response.data });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async addMedicine(payload, res) {
        const { id, pharmacistId, medicines } = payload;
        const { error, data } = await this.medicalService.addMedicine(id, pharmacistId, medicines);
        if (error)
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json({ error: error.response.data });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
    async createSymptoms(payload, res) {
        const { patientId, symptoms } = payload;
        const { error, data } = await this.medicalService.createSymptoms(patientId, symptoms);
        if (error)
            return res
                .status(common_1.HttpStatus.BAD_REQUEST)
                .json({ error: error.response.data });
        return res.status(common_1.HttpStatus.OK).json({ data });
    }
};
__decorate([
    common_1.Get("/health"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "healthCheck", null);
__decorate([
    common_1.Get("/physicians"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "getAllDoctors", null);
__decorate([
    common_1.Get("/pharmacists"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "getAllPharmacists", null);
__decorate([
    common_1.Get("/medicalRecords"),
    __param(0, common_1.Res()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "getMedicalRecords", null);
__decorate([
    common_1.Post("/populateMedicalRecords"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "populateMedicalRecords", null);
__decorate([
    common_1.Post("/medicalRecords/assignDoctor"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "assignDoctor", null);
__decorate([
    common_1.Post("/medicalRecords/assignPharmacist"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "assignPharmacy", null);
__decorate([
    common_1.Post("/addConsultation"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "assignConsultation", null);
__decorate([
    common_1.Post("/addMedicine"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "addMedicine", null);
__decorate([
    common_1.Post("/createRecord"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MedicalController.prototype, "createSymptoms", null);
MedicalController = __decorate([
    common_1.Controller("/api/v1/medical"),
    __metadata("design:paramtypes", [medical_service_1.MedicalService])
], MedicalController);
exports.MedicalController = MedicalController;
//# sourceMappingURL=medical.controller.js.map