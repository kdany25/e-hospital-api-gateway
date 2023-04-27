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
        var _a, _b, _c;
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
            if ((data === null || data === void 0 ? void 0 : data.payload) && role == "PHARMACIST") {
                const { status: userStatus, data: userData } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/createPharmacist`, {
                    id: (_a = data === null || data === void 0 ? void 0 : data.payload) === null || _a === void 0 ? void 0 : _a.id,
                    firstName,
                    lastName,
                    userName,
                    email,
                    role,
                    age,
                    gender,
                });
                console.log("pharmacist");
            }
            if ((data === null || data === void 0 ? void 0 : data.payload) && role == "PATIENT") {
                const { status: userStatus, data: userData } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/createPatient`, {
                    id: (_b = data === null || data === void 0 ? void 0 : data.payload) === null || _b === void 0 ? void 0 : _b.id,
                    firstName,
                    lastName,
                    userName,
                    email,
                    role,
                    age,
                    gender,
                });
                console.log("patient");
            }
            if ((data === null || data === void 0 ? void 0 : data.payload) && role == "PHYSICIAN") {
                const { status: userStatus, data: userData } = await axios_1.default.post(`${process.env.BASE_URL_MEDICAL_UNIT}/createPhysician`, {
                    id: (_c = data === null || data === void 0 ? void 0 : data.payload) === null || _c === void 0 ? void 0 : _c.id,
                    firstName,
                    lastName,
                    userName,
                    email,
                    role,
                    age,
                    gender,
                });
                console.log("physician");
            }
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