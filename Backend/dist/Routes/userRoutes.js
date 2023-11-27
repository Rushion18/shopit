"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usercontroller_1 = require("../controllers/usercontroller");
const verifytoken_1 = require("../middlewares/verifytoken");
const user_router = (0, express_1.default)();
user_router.get("/getallusers", verifytoken_1.verifyToken, usercontroller_1.getAllUsers);
user_router.post("/register", usercontroller_1.registerUser);
user_router.post("/login", usercontroller_1.loginUser);
user_router.get("/checkuserdetails", verifytoken_1.verifyToken, usercontroller_1.checkUserDetails);
user_router.get("/getoneuser", usercontroller_1.getOneUser);
user_router.put("/updateuser", usercontroller_1.updateUserDetails);
user_router.delete("/deleteuser/:id", usercontroller_1.deleteUser);
user_router.post("/resetpassword", usercontroller_1.resetPassword);
// user_router.post("/updatepassword", updatePassword);
exports.default = user_router;
