"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userValidator_1 = require("../Validators/userValidator");
const dbHelper_1 = require("../helpers/dbHelper");
// REGISTER
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userName, email, password, phone_no } = req.body;
        // console.log(req.body);
        const { error } = userValidator_1.userRegisterValidationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        // console.log(error);
        let userID = (0, uuid_1.v4)();
        const hashedPwd = yield bcrypt_1.default.hash(password, 8);
        const Procedure1 = "getUserByEmail";
        const Param = { email };
        const result = yield (0, dbHelper_1.execute)(Procedure1, Param);
        const user = result.recordset[0];
        // console.log(user);
        if (user) {
            return res.json({ error: "Email already exists. User not registered." });
        }
        else {
            const procedureName2 = "registerUser";
            const params = {
                userID,
                userName,
                email,
                phone_no,
                password: hashedPwd,
            };
            console.log("here");
            yield (0, dbHelper_1.execute)(procedureName2, params);
            res.status(200).json({
                message: "user registered successfully",
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.registerUser = registerUser;
//LOGIN
