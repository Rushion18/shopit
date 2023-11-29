"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_2 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const cors_1 = __importDefault(require("cors"));
const productRoutes_1 = __importDefault(require("./Routes/productRoutes"));
const orderRoutes_1 = __importDefault(require("./Routes/orderRoutes"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_2.default)();
app.use((0, express_1.json)());
app.use((0, cors_1.default)());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use("/user", userRoutes_1.default);
app.use("/product", productRoutes_1.default);
app.use("/order", orderRoutes_1.default);
app.use((err, req, res, next) => {
    res.json({
        error: err.message,
    });
});
app.listen(port, () => {
    console.log(`Shopie is running on port ${port}`);
});
