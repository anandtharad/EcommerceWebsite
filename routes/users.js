const express = require("express")
const router = express.Router();

const catchAsync = require("../Utils/catchAsync")
const passport = require("passport")

const users = require("../controllers/user")
const products=require("../controllers/products")
router.route("/")
.get(catchAsync(users.landing))

router.route("/register")
    .get(users.renderNewUserForm)
    .post(catchAsync(users.registerNewUser))

router.route("/login")
    .get(users.renderLoginForm)
    .post(passport.authenticate("local", { failureFlash: true, failureRedirect: "/login", keepSessionInfo: true }), catchAsync(users.loginUser))

router.get('/logout', users.logoutUser)
router.route("/cart")
    .get(catchAsync(products.shoppingcart) )
    .post(catchAsync(products.updateCart))


module.exports = router;