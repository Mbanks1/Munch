const express = require("express");
const router = express.Router();
const boardCtrl = require("../controllers/board");

// public routes

router.get("/", boardCtrl.index);

//protected routes



//helper functions

module.exports = router;
