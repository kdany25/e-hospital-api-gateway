"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
require("dotenv").config();
let AuthenticationService = class AuthenticationService {
    async register(firstName, lastName, userName, email, gender, password, role, phone, age) {
        console.log(email);
        try {
            const { status, data } = await axios_1.default.post(`${process.env.BASE_URL_AUTH}/register`, {
                firstName,
                lastName,
                userName,
                email,
                gender,
                password,
                role,
                phone,
                age,
            });
            return { status, data };
        }
        catch (error) {
            return { error };
        }
    }
    async login(email, password) {
        try {
            const { status, data } = await axios_1.default.post(`${process.env.BASE_URL_AUTH}/login`, {
                email,
                password,
            });
            return { status, data };
        }
        catch (error) {
            return { error };
        }
    }
};
AuthenticationService = __decorate([
    common_1.Injectable()
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map