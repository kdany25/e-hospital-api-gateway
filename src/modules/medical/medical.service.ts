import { Injectable } from "@nestjs/common";
import axios from "axios";
require("dotenv").config();

@Injectable()
export class MedicalService {
	async populateMedicalRecords() {
		try {
			const { status, data } = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/populateMedicalRecords`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}
	async createSymptoms(patientId: string, symptoms: string) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/createRecord`,
				{ patientId, symptoms }
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}

	async assignDoctorToMedicalRecord(
		physicianId: string,
		medicalRecordId: string,
		patientId: string
	) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords/assignDoctor`,
				{ physicianId, id: medicalRecordId, patientId }
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async assignPharmacistToMedicalRecord(
		pharmacistId: string,
		medicalRecordId: string,
		patientId: string
	) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords/assignPharmacist`,
				{ pharmacistId, id: medicalRecordId, patientId }
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async addConsultation(
		id: string,
		physicianId: string,
		consultation: string
	) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/addConsultation`,
				{ id, physicianId, consultation }
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}

	async addMedicine(id: string, pharmacistId: string, medicines: string) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/addMedicine`,
				{ id, medicines, pharmacistId }
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}

	async getMedicalRecordsByPatientId(patientId: string) {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords?patientId=${patientId}`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async getMedicalRecordsByPhysicianId(physicianId: string) {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords?physicianId=${physicianId}`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async getMedicalRecordsByPharmacistId(pharmacistId: string) {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords?pharmacistId=${pharmacistId}`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async getMedicalRecords() {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/medicalRecords`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async getAllPhysicians() {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/physicians`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async getAllPharmacists() {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/pharmacists`
			);

			return { status, data };
		} catch (error) {
			return { error: error.message };
		}
	}

	async uploadMedecine(medName: string, medPrice: number, medExpiration) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/uploadMedecine`,
				{ medName, medPrice, medExpiration }
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}
	async getAllMedecine() {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/getMedecines`
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}

	async prescribeMedecine(
		recordId: string,
		pharmacistId: string,
		medName: string,
		medPrice: number,
		medExpiration: string
	) {
		try {
			const {
				status,
				data,
			} = await axios.post(
				`${process.env.BASE_URL_MEDICAL_UNIT}/prescribeMedecine`,
				{ recordId, pharmacistId, medName, medPrice, medExpiration }
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}

	async downLoadPrescription(recordId: string) {
		try {
			const { status, data } = await axios.get(
				`${process.env.BASE_URL_MEDICAL_UNIT}/downloadPrescription?recordId=${recordId}`
			);
      
			console.log("iuhuihuihiuhiu",data)
			return { status, data };
		} catch (error) {
			return { error };
		}
	}
}
