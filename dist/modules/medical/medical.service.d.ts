export declare class MedicalService {
    populateMedicalRecords(): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    createSymptoms(patientId: string, symptoms: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    assignDoctorToMedicalRecord(physicianId: string, medicalRecordId: string, patientId: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    assignPharmacistToMedicalRecord(pharmacistId: string, medicalRecordId: string, patientId: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    addConsultation(id: string, physicianId: string, consultation: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    addMedicine(id: string, pharmacistId: string, medicines: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    getMedicalRecordsByPatientId(patientId: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    getMedicalRecordsByPhysicianId(physicianId: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    getMedicalRecordsByPharmacistId(pharmacistId: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    getMedicalRecords(): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    getAllPhysicians(): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    getAllPharmacists(): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
}
