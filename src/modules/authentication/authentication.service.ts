import { Injectable } from "@nestjs/common";
import axios from "axios";
require("dotenv").config();

@Injectable()
export class AuthenticationService {
	async register(
		firstName: string,
		lastName: string,
		userName: string,
		email: string,
		gender: string,
		password: string,
		role: string,
		phone: string,
		age: number
	) {
		try {
			const { status, data } = await axios.post(
				`${process.env.BASE_URL_AUTH}/register`,
				{
					firstName,
					lastName,
					userName,
					email,
					gender,
					password,
					role,
					phone,
					age,
				}
			);

			if (data?.payload && role == "PHARMACIST") {
				const { status: userStatus, data: userData } = await axios.post(
					`${process.env.BASE_URL_MEDICAL_UNIT}/createPharmacist`,
					{
						id: data?.payload?.id,
						firstName,
						lastName,
						userName,
						email,
						role,
						age,
						gender,
					}
				);
			}

			if (data?.payload && role == "PATIENT") {
				const { status: userStatus, data: userData } = await axios.post(
					`${process.env.BASE_URL_MEDICAL_UNIT}/createPatient`,
					{
						id: data?.payload?.id,
						firstName,
						lastName,
						userName,
						email,
						role,
						age,
						gender,
					}
				);
			}

			if (data?.payload && role == "PHYSICIAN") {
				const { status: userStatus, data: userData } = await axios.post(
					`${process.env.BASE_URL_MEDICAL_UNIT}/createPhysician`,
					{
						id: data?.payload?.id,
						firstName,
						lastName,
						userName,
						email,
						role,
						age,
						gender,
					}
				);
			}

			return { status, data };
		} catch (error) {
			return { error };
		}
	}

	async login(email: string, password: string) {
		try {
			const { status, data } = await axios.post(
				`${process.env.BASE_URL_AUTH}/login`,
				{
					email,
					password,
				}
			);

			return { status, data };
		} catch (error) {
			return { error };
		}
	}
}
