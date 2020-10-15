const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error:${err}`));
});

router.post("/add", (req, res) => {
  User.create(req.body)
    .then(() => {
      res.json({ msg: "user created" });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
