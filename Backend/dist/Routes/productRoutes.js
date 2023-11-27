"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifytoken_1 = require("../middlewares/verifytoken");
const productcontrollers_1 = require("../controllers/productcontrollers");
const product_router = (0, express_1.default)();
// user_router.get("/getallusers", verifyToken, getAllUsers);
product_router.post("/add", productcontrollers_1.createProduct);
product_router.get("/getallproducts", verifytoken_1.verifyToken, productcontrollers_1.getProducts);
product_router.put("/updateproduct", productcontrollers_1.updateProduct);
product_router.get("/getoneproduct/:ID", productcontrollers_1.getProduct);
product_router.delete("/deleteproduct/:ID", productcontrollers_1.deleteProduct);
exports.default = product_router;
