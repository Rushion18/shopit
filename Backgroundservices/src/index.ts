import express, { json, urlencoded } from "express";
import { welcomeUser } from "./mailServices/welcomeuser";
import cors from "cors";
import cron from "node-cron";
import dotenv from "dotenv";

const app = express();
// const cors = require("cors");
dotenv.config();
app.use(json())
app.use(cors())
app.use(urlencoded({ extended: true }));
const port = process.env.PORT;

const run = async () => {
  cron.schedule("*/10*****", async () => {
    console.log("Checking for new user");
    await welcomeUser();
  });
};

run();

app.listen("4500", () => {
  console.log(`Node mailer is app and runnning on ${port}`);
});
