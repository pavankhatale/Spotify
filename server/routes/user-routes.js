const express = require("express");
const { edit, remove, getData, add } = require("../controllers/ProjectC");
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/add", add);
router.get("/getdata", getData);
router.patch("/edit/:id", edit);
router.delete("/deleteuser/:id", remove);
router.post("/logout", verifyToken, logout);
module.exports = router;
