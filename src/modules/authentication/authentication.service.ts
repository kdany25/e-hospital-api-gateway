import { Injectable } from "@nestjs/common";
import axios from "axios";
require("dotenv").config();

@Injectable()
export class AuthenticationService {
	async register(
		email: string,
		password: string,
		firstName: string,
		lastName: string,
		userName: string,
		role: string,
		phone: string,
		gender: string,
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
