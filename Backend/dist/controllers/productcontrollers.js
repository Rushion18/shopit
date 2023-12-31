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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.deleteProduct = exports.updateProduct = exports.getProducts = exports.createProduct = void 0;
const productValidator_1 = require("../Validators/productValidator");
const dbHelper_1 = require("../helpers/dbHelper");
const uuid_1 = require("uuid");
//CREATE PRODUCTS
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, price, image, category, description, stock } = req.body;
        // console.log(req.body);
        const { error } = productValidator_1.validateProduct.validate(req.body);
        // console.log(error);
        if (error)
            return res.status(400).send({ error: "please place correct details" });
        const newProduct = {
            productID: (0, uuid_1.v4)(),
            title,
            price,
            image,
            category,
            description,
            stock,
        };
        const procedure = "createProduct";
        const params = newProduct;
        yield (0, dbHelper_1.execute)(procedure, params);
        return res.send({ message: "product created successfully" });
    }
    catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
exports.createProduct = createProduct;
//GET ALL PRODUCTS
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const procedureName = "getProducts";
        const result = yield (0, dbHelper_1.query)(`EXEC ${procedureName}`);
        // console.log(result.recordset);
        return res.json(result.recordset);
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ message: "internal server error" });
    }
});
exports.getProducts = getProducts;
//UPDATE PRODUCTS
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productID, title, price, image, category, description, stock } = req.body;
        console.log(req.body);
        const { error } = productValidator_1.validateUpdateProduct.validate(req.body);
        console.log(error);
        if (error)
            return res.status(400).send({ error: "please put correct details" });
        const newProject = {
            productID,
            title,
            price,
            image,
            category,
            description,
            stock,
        };
        const ProcedureName = "updateProduct";
        const params = newProject;
        yield (0, dbHelper_1.execute)(ProcedureName, params);
        return res.status(200).send({ message: "Product updated successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            error: error.message,
            message: "Internal Server Error",
        });
    }
});
exports.updateProduct = updateProduct;
//DELETE PRODUCT
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productID = req.params.ID;
        if (!productID)
            return res.status(400).send({ error: "Id is required" });
        const { error } = productValidator_1.validateProductId.validate({ productID });
        if (error)
            return res.status(400).send({ error: "please input id" });
        const procedureName = "deleteProduct";
        yield (0, dbHelper_1.execute)(procedureName, { productID });
        res.status(201).send({ message: "product deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            error: error.message,
            message: "Internal Sever Error",
        });
    }
});
exports.deleteProduct = deleteProduct;
//GET SINGLE PRODUCTS
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productID = req.params.ID;
        console.log(productID);
        if (!productID)
            return res.status(400).send({ error: "Id is required" });
        const { error } = productValidator_1.validateProductId.validate({ productID });
        console.log(error);
        if (error)
            return res.status(400).send({ error: error.details[0].message });
        console.log("hello");
        const procedureName = "getProductById";
        const result = yield (0, dbHelper_1.execute)(procedureName, { productID });
        res.json(result.recordset);
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ message: "internal server error" });
    }
});
exports.getProduct = getProduct;
