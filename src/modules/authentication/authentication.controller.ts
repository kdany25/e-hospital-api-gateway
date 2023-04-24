import {
	Body,
	Controller,
	Get,
	Headers,
	HttpStatus,
	Post,
	Query,
	Res,
} from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
require("dotenv").config();

@Controller("/api/v1/auth")
export class AuthenticationController {
	constructor(private readonly authService: AuthenticationService) {}

	@Post("/register")
	async register(@Body() payload, @Res() res) {
		const {
			firstName,
			lastName,
			userName,
			email,
			gender,
			password,
			role,
			phone,
			age,
		} = payload;

		const { error, data } = await this.authService.register(
			firstName,
			lastName,
			userName,
			email,
			gender,
			password,
			role,
			phone,
			age
		);

		if (error)
			return res
				.status(HttpStatus.BAD_REQUEST)
				.json({ error: error.response.data });

		return res.status(HttpStatus.OK).json({ data });
	}

	@Post("/login")
	async logIn(@Body() payload, @Res() res) {
		const { email, password } = payload;

		const { error, data } = await this.authService.login(email, password);

		if (error)
			return res
				.status(HttpStatus.BAD_REQUEST)
				.json({ error: error.response.data });

		return res.status(HttpStatus.OK).json({ data });
	}
}
