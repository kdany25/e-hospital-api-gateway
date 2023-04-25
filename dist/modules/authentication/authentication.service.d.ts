export declare class AuthenticationService {
    register(firstName: string, lastName: string, userName: string, email: string, gender: string, password: string, role: string, phone: string, age: number): Promise<{
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
