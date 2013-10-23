var errors = require('./errors')
  , WebsiteIndex = require('../app/controllers/website/index')

module.exports = function(app) {

  app.get('/', WebsiteIndex.show);

  app.get('/ip', WebsiteIndex.showIP);


  //default
  errors(app);

}