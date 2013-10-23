var expect = require('expect.js')
  , async = require('async') 
  , Toolbox = require('../config/toolbox')
  , Enums = require('../config/enums')
  , Counter = require('../app/models/counter')
  , User = require('../app/models/user')




// before(function() {
//   var connStr = Toolbox.config.db + '-test';        //connect to the test database
//   require('../config/db')(connStr, function() {

//   });  
// });
