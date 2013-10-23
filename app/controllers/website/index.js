
exports.show = function(req, res, next) {
  res.redirect('/ip');
  //res.render('pages/content/website/index');
}


exports.showIP = function(req, res, next) {
  res.locals.ipAddress = req.ip;
  res.render('pages/content/website/ip');
}