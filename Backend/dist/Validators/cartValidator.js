"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderValidation = exports.validateOrderID = exports.addProductValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addProductValidation = joi_1.default.object().keys({
    productID: joi_1.default.string().required(),
    userID: joi_1.default.string().required(),
    count: joi_1.default.number().min(1).required(),
    price: joi_1.default.number().required(),
});
exports.validateOrderID = joi_1.default.object().keys({
    orderID: joi_1.default.string().min(8).required(),
});
exports.updateOrderValidation = joi_1.default.object().keys({
    productID: joi_1.default.string().required(),
    userID: joi_1.default.string().required(),
    count: joi_1.default.number().min(1).required(),
    price: joi_1.default.number().required(),
    orderID: joi_1.default.string().required()
});
