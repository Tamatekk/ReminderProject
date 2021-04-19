const express = require("express");
const passport = require("../middleware/passport");
const { forwardAuthenticated } = require("../middleware/checkAuth");

const router = express.Router();

router.get("/auth/login", forwardAuthenticated, (req, res) => res.render("/auth/login"));

router.post(
    "/auth/login",
    passport.authenticate("local", {
        successRedirect: "/reminder/index",
        failureRedirect: "/auth/login"
    })
)

module.exports = router;