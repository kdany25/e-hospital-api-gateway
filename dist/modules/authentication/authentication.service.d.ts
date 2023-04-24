export declare class AuthenticationService {
    register(email: string, password: string, firstName: string, lastName: string, userName: string, role: string, phone: string, gender: string, age: number): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
    login(email: string, password: string): Promise<{
        status: number;
        data: any;
        error?: undefined;
    } | {
        error: any;
        status?: undefined;
        data?: undefined;
    }>;
}
