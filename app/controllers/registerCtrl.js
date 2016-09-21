var registerCtrl = {};
var registerModel = require("../models/register.models");
var security = require("../utilize/security");

registerCtrl.get = function (req, res) {
    res.render("home", {
        view: "register"
    });
};