import {
	Body,
	Controller,
	Get,
	HttpStatus,
	Post,
	Query,
	Res,
} from "@nestjs/common";
import { MedicalService } from "./medical.service";
import * as Papa from "papaparse";
import * as csv from "csv-parser";
import * as fs from "fs";
import { Response } from "express";

require("dotenv").config();

@Controller("/api/v1/medical")
export class MedicalController {
	constructor(private readonly medicalService: MedicalService) {}

	// Check health of the service
	@Get("/health")
	async healthCheck(@Res() res) {
		return res.status(HttpStatus.OK).send("OK");
	}

	@Get("/physicians")
	async getAllDoctors(@Res() res) {
		const { error, data } = await this.medicalService.getAllPhysicians();

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Get("/pharmacists")
	async getAllPharmacists(@Res() res) {
		const { error, data } = await this.medicalService.getAllPharmacists();

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Get("/medicalRecords")
	async getMedicalRecords(@Res() res, @Query() query) {
		const { patientId, physicianId, pharmacistId } = query;

		if (patientId) {
			const {
				error,
				data: medicalRecords,
			} = await this.medicalService.getMedicalRecordsByPatientId(
				patientId
			);

			if (error)
				return res
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.json({ error });

			if (!medicalRecords.length)
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: "No medical records found" });

			return res.status(HttpStatus.OK).json({ data: medicalRecords });
		}

		if (physicianId) {
			const {
				error,
				data: medicalRecords,
			} = await this.medicalService.getMedicalRecordsByPhysicianId(
				physicianId
			);

			if (error)
				return res
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.json({ error });

			if (!medicalRecords.length)
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: "No medical records found" });

			return res.status(HttpStatus.OK).json({ data: medicalRecords });
		}

		if (pharmacistId) {
			const {
				error,
				data: medicalRecords,
			} = await this.medicalService.getMedicalRecordsByPharmacistId(
				pharmacistId
			);

			if (error)
				return res
					.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.json({ error });

			if (!medicalRecords.length)
				return res
					.status(HttpStatus.NOT_FOUND)
					.json({ error: "No medical records found" });

			return res.status(HttpStatus.OK).json({ data: medicalRecords });
		}

		const {
			error,
			data: medicalRecords,
		} = await this.medicalService.getMedicalRecords();

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data: medicalRecords });
	}

	@Post("/populateMedicalRecords")
	async populateMedicalRecords(@Res() res) {
		const {
			error,
			data,
		} = await this.medicalService.populateMedicalRecords();

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/medicalRecords/assignDoctor")
	async assignDoctor(@Body() payload, @Res() res) {
		const { id, patientId, physicianId } = payload;

		const {
			error,
			data,
		} = await this.medicalService.assignDoctorToMedicalRecord(
			physicianId,
			id,
			patientId
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/medicalRecords/assignPharmacist")
	async assignPharmacy(@Body() payload, @Res() res) {
		const { id, patientId, pharmacistId } = payload;

		const {
			error,
			data,
		} = await this.medicalService.assignPharmacistToMedicalRecord(
			pharmacistId,
			id,
			patientId
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/addConsultation")
	async assignConsultation(@Body() payload, @Res() res) {
		const { id, physicianId, consultation } = payload;

		const { error, data } = await this.medicalService.addConsultation(
			id,
			physicianId,
			consultation
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/addMedicine")
	async addMedicine(@Body() payload, @Res() res) {
		const { id, pharmacistId, medicines } = payload;

		const { error, data } = await this.medicalService.addMedicine(
			id,
			pharmacistId,
			medicines
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/createRecord")
	async createSymptoms(@Body() payload, @Res() res) {
		const { patientId, symptoms } = payload;

		const { error, data } = await this.medicalService.createSymptoms(
			patientId,
			symptoms
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Get("/allMedecines")
	async getAllMedecines(@Res() res) {
		const { error, data } = await this.medicalService.getAllMedecine();

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/uploadMedecine")
	async uploadMedecine(@Body() payload, @Res() res) {
		const { medName, medPrice, medExpiration } = payload;

		const { error, data } = await this.medicalService.uploadMedecine(
			medName,
			medPrice,
			medExpiration
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/prescribeMedecine")
	async prescribeMedecine(@Body() payload, @Res() res) {
		const {
			recordId,
			pharmacistId,
			medName,
			medPrice,
			medExpiration,
		} = payload;

		const { error, data } = await this.medicalService.prescribeMedecine(
			recordId,
			pharmacistId,
			medName,
			medPrice,
			medExpiration
		);

		if (error) return res.status(HttpStatus.BAD_REQUEST).json({ error });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Get("/downloadCSV")
	async downloadCsv(@Res() res: Response, @Query() query) {
		const { patientId } = query;

		const {
			error,
			data: medicalRecords,
		} = await this.medicalService.getMedicalRecordsByPatientId(patientId);

		if (error)
			return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error });

		if (!medicalRecords.length)
			return res
				.status(HttpStatus.NOT_FOUND)
				.json({ error: "No medical records found" });

		const csvData = [];
		csvData.push(["medName", "medPrice", "medExpiration"]);

		medicalRecords[0]?.medicines.forEach((d) => {
			const row = [];
			row.push(d.medName);
			row.push(d.medPrice);
			row.push(d.medExpiration);
			csvData.push(row);
		});

		const fileName = "subscriptions.csv";
		const filePath = `./${fileName}`;

		fs.writeFile(filePath, "", () => {});

		csvData.forEach((d) => {
			fs.appendFile(filePath, `${d.join(",")}\n`, () => {});
		});

		res.set({
			"Content-Disposition": `attachment; filename=${fileName}`,
			"Content-Type": "text/csv",
		});

		fs.createReadStream(filePath).pipe(res);
	}
}
