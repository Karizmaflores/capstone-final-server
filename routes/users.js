const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users");

router.get("/", userControllers.list); // connects to users.js list function

router.get("/:id", userControllers.show);

router.post("/", userControllers.create);

router.put("/:id", userControllers.update);

router.delete("/:id", userControllers.remove)

module.exports = router;