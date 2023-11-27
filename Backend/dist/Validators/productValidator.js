"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductId = exports.validateUpdateProduct = exports.validateProduct = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validateProduct = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    stock: joi_1.default.number().required(),
    image: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    description: joi_1.default.string().min(5).required(),
});
exports.validateUpdateProduct = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    productID: joi_1.default.string().min(8).required(),
    price: joi_1.default.number().required(),
    image: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    description: joi_1.default.string().min(5).required(),
    stock: joi_1.default.number().required(),
});
exports.validateProductId = joi_1.default.object().keys({
    productID: joi_1.default.string().min(8).required(),
});
