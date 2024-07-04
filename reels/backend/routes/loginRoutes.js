import express from "express";

const router = express.Router();

router.post("/", (res, req) => {
  console.log(req.username, req.password);
});
