"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
require("dotenv").config();
let MedicalService = class MedicalService {
    async populateMedicalRecords() {
        try {
            const { status, data } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/populateMedicalRecords`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async assignDoctorToMedicalRecord(physicianId, medicalRecordId, patientId) {
        try {
            const { status, data, } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords/assignDoctor`, { physicianId, id: medicalRecordId, patientId });
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async assignPharmacistToMedicalRecord(pharmacistId, medicalRecordId, patientId) {
        try {
            const { status, data, } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords/assignPharmacist`, { pharmacistId, id: medicalRecordId, patientId });
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async addConsultation(id, physicianId, consultation) {
        try {
            const { status, data, } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/addConsultation`, { id, physicianId, consultation });
            return { status, data };
        }
        catch (error) {
            return { error };
        }
    }
    async addMedicine(id, pharmacistId, medicines) {
        try {
            const { status, data, } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/addMedicine`, { id, medicines, pharmacistId });
            return { status, data };
        }
        catch (error) {
            return { error };
        }
    }
    async getMedicalRecordsByPatientId(patientId) {
        try {
            const { status, data } = await axios_1.default.get(`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords?patientId=${patientId}`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getMedicalRecordsByPhysicianId(physicianId) {
        try {
            const { status, data } = await axios_1.default.get(`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords?physicianId=${physicianId}`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getMedicalRecordsByPharmacistId(pharmacistId) {
        try {
            const { status, data } = await axios_1.default.get(`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords?pharmacistId=${pharmacistId}`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getMedicalRecords() {
        try {
            const { status, data } = await axios_1.default.get(`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getAllPhysicians() {
        try {
            const { status, data } = await axios_1.default.get(`${process.env.BASE_URL_MEDICAL_UNIT}/physicians`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
    async getAllPharmacists() {
        try {
            const { status, data } = await axios_1.default.get(`${process.env.BASE_URL_MEDICAL_UNIT}/pharmacists`);
            return { status, data };
        }
        catch (error) {
            return { error: error.message };
        }
    }
};
MedicalService = __decorate([
    common_1.Injectable()
], MedicalService);
exports.MedicalService = MedicalService;
//# sourceMappingURL=medical.service.js.map