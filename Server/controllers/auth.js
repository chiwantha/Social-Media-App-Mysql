import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  // CHECK USER IF EXSISTS

  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User Already Exsists");

    // CREATE A NEW USER
    // HASH MY PASSWPRD
    const salt = bcrypt.genSaltSync(10);
    const hasedPassword = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (username,email,password,name) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hasedPassword,
      req.body.name,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User Has Been Created !");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User Not Found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong Password or Username");

    const token = jwt.sign({ id: data[0].id }, "secretkey");
    const { password, ...others } = data[0];

    res
      .cookie("accesstoken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accesstoken", {
      srcure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User Has Been Logged Out");
};
