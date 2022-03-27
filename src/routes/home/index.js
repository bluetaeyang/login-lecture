"use strict";

import * as ctrl from "./home.ctrl.js";

import express from "express";
const router = express.Router();

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

export default router;
