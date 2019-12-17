const express = require("express");
const router = express.Router();

const customer = require("../../models/Items");

router.get("/", (req, res) => {
  customer
    .find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

router.post("/", (req, res) => {
  const newCustomer = new customer({
    name: req.body.name
  });

  newCustomer
  .save()
  .then(item => res.json(customer));
});

module.exports = router;
