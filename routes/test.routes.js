module.exports = app => {
    const test = require("../controllers/controller.js");

    var router = require("express").Router();

    router.post("/", test.create);
}