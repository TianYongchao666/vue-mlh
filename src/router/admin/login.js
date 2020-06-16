var express = require("express");
var router = express.Router();
/**
 * 管理后台登录
 */
router.grt("/", function (req, res, next) {
    res.render("admin/login");
});
module.exports = router;