
module.exports = { ensureAuthenticated: function (req, res) {
    if (req.isAuthentecated()) {
        return next();
    }
    res.redirect("/auth/login");
},

forwardAuthenticated: function (req, res, next) {
    if (!req.isAuthentecated()) {
        return next();
    }
    res.redirect("/auth/login")
} }