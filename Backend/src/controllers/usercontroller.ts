import { Request, Response } from "express";
import mssql from "mssql";

import { v4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sqlConfig } from "../config/sqlConfig";
import { userRegisterValidationSchema } from "../Validators/userValidator";
import { execute } from "../helpers/dbHelper";

// REGISTER
export const registerUser = async (req: Request, res: Response) => {
  try {
    let { userName, email, password, phone_no } = req.body;

    // console.log(req.body);

    const { error } = userRegisterValidationSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    // console.log(error);

    let userID = v4();
    const hashedPwd = await bcrypt.hash(password, 8);

    const Procedure1 = "getUserByEmail";
    const Param = { email };

    const result = await execute(Procedure1, Param);

    const user = result.recordset[0];

    // console.log(user);

    if (user) {
      return res.json({ error: "Email already exists. User not registered." });
    } else {
      const procedureName2 = "registerUser";
      const params = {
        userID,
        userName,
        email,
        phone_no,
        password: hashedPwd,
      };
      console.log("here");

      await execute(procedureName2, params);

      res.status(200).json({
        message: "user registered successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//LOGIN
