const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.get("/", (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post("/add", (req, res) => {
  const { username, description } = req.body;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  Exercise.create({ username, description, duration, date })
    .then(() => {
      res.json({ msg: "Exercise created" });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.put("/update/:id", (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ msg: "exercise updated" });
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
