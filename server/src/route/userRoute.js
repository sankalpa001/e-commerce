const express = require("express");

const router = express.Router();

const Users = require('../model/users')

const {register, getUserData} = require('../Controller/users')

router.post("/register", register);

router.get("/users",getUserData);
/* 
router.put("/users", async (req, res) => {
  const data = await Users.findByIdAndUpdate(req.body.id, req.body);
});

router.delete("/users", async (req, res) => {
  const data = await Users.findByIdAndDelete(req.body.id);
});
*/

module.exports = router;