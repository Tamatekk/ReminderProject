let database = require("../database");
const getUserByEmailIdAndPassword = require("./user_controller");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    // implement
    let email= req.body.email
    let password = req.body.email
    let user = getUserByEmailIdAndPassword(email, password)
    console.log(email,password)
    let user_id = user.id
    res.redirect("reminder/index")
 },

  registerSubmit: (req, res) => {
    // implement
  },
};

module.exports = authController;
