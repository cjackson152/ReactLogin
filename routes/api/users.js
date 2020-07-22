const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//loads validate
const validateRegisterInput = require("../../validation/register");
const validatedLoginInput = require("../../validation/login");

//loads user
const User = require("../../models/User");

//
router.post("/register", (req,res) => {

const { errors, isValid } = validateRegisterInput(req.body);

if (!isValid) {
    return resizeBy.status(400).json(errors);

}

User.findOne({ email: req.body.email }).then(user => {
    if (user) {
        return resizeBy.status(400).json({ email: "Email already taken" });

    } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    });
});
    }
});
});