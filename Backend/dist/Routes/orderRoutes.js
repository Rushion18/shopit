"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifytoken_1 = require("../middlewares/verifytoken");
const cartcontroller_1 = require("../controllers/cartcontroller");
const order_router = (0, express_1.default)();
order_router.get("/allorders", verifytoken_1.verifyToken, cartcontroller_1.getallorders);
order_router.post("/add", cartcontroller_1.addProduct);
order_router.get("/oneorder/:ID", cartcontroller_1.getOrder);
order_router.put("/updateorder", cartcontroller_1.updateOrders);
order_router.delete("/deleteorder/:ID", cartcontroller_1.deleteOrder);
exports.default = order_router;
