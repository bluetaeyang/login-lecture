"use strict";

import * as ctrl from "./home.ctrl.js";

import express from "express";
const router = express.Router();

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

export default router;
