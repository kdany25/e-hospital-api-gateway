import { AuthenticationService } from "./authentication.service";
export declare class AuthenticationController {
    private readonly authService;
    constructor(authService: AuthenticationService);
    register(payload: any, res: any): Promise<any>;
    logIn(payload: any, res: any): Promise<any>;
}
