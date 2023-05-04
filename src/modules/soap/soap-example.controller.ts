import { Body, Controller, Get, Res, HttpStatus } from "@nestjs/common";
import * as soap from "soap";
import * as util from "util";

@Controller("soap")
export class SoapController {
	@Get()
	async soapExample(@Body() payload, @Res() res): Promise<any> {
		const url =
			"http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL";
		const { country } = payload;
		const client = await soap.createClientAsync(url);
		const args = { sCountryISOCode: country };
		const result = await client.FullCountryInfoAsync(args);
		// console.log(util.inspect(result, false, null, true)); // Use util.inspect instead of JSON.stringify
		return res.status(HttpStatus.OK).json({ result });
	}
}
