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
exports.deleteOrder = exports.updateOrders = exports.getOrder = exports.getallorders = exports.addProduct = void 0;
const cartValidator_1 = require("../Validators/cartValidator");
const uuid_1 = require("uuid");
const dbHelper_1 = require("../helpers/dbHelper");
//add to cart
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { userID, productID, price, count } = req.body;
        console.log(req.body);
        const { error } = cartValidator_1.addProductValidation.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        let orderID = (0, uuid_1.v4)();
        const procedureName2 = "createneworder";
        const params = {
            productID,
            userID,
            price,
            count,
            orderID,
        };
        yield (0, dbHelper_1.execute)(procedureName2, params);
        res.status(200).json({
            message: "order added successfully",
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.addProduct = addProduct;
//GET ALL ORDERS
const getallorders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const procedureName = "getAllOrders";
        const result = yield (0, dbHelper_1.query)(`EXEC ${procedureName}`);
        return res.json(result.recordset);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getallorders = getallorders;
//GET ONE BOOKING
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderID = req.params.ID;
        //console.log(orderID);
        if (!orderID)
            return res.status(400).send({ error: "Id is required" });
        const { error } = cartValidator_1.validateOrderID.validate({ orderID });
        console.log(error);
        if (error)
            return res.status(400).send({ error: error.details[0].message });
        console.log("hello");
        const procedureName = "getOrderById";
        const result = yield (0, dbHelper_1.execute)(procedureName, { orderID });
        res.json(result.recordset);
    }
    catch (error) {
        console.log(error);
        res.status(404).send({ message: "internal server error" });
    }
});
exports.getOrder = getOrder;
//UPDATE BOOKING
const updateOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderID, count, price, userID, productID } = req.body;
        console.log(req.body);
        const { error } = cartValidator_1.updateOrderValidation.validate(req.body);
        console.log(error);
        if (error)
            return res.status(400).send({ error: "please put correct details" });
        const newOrder = {
            productID,
            count,
            price,
            userID,
            orderID
        };
        const ProcedureName = "updateOrder";
        const params = newOrder;
        yield (0, dbHelper_1.execute)(ProcedureName, params);
        return res.status(200).send({ message: "Order updated successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            error: error.message,
            message: "Internal Server Error",
        });
    }
});
exports.updateOrders = updateOrders;
//delete from cart
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderID = req.params.ID;
        //   console.log(orderID);
        if (!orderID) {
            return res.send({ message: "enter id" });
        }
        console.log(`order id is:${orderID}`);
        const result = yield (0, dbHelper_1.execute)("deleteOrder", { orderID });
        console.log(result.recordset);
        res.send({ message: "Order deleted successfuly" });
    }
    catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
});
exports.deleteOrder = deleteOrder;
