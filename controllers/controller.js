const db = require("../models");
const Test = db.test;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a test
  const test = {
    title: req.body.title,
    para: req.body.para,
    published: req.body.published ? req.body.published : false
  };

  // Save test in the database
  Test.create(test)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Test."
      });
    });
};