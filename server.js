var express = require('express'),
  http = require('http'),
  helmet = require('helmet'),
  toolbox = require('./config/toolbox')



var app = express();
var MongoStore = require('connect-mongo')(express);


var config = toolbox.config;

//connect to the database
require('./config/db')(function(mongoose) {
 
});


 // all environments
app.set('port', process.env.PORT || 3333);
app.set('views', __dirname + '/app//views');
app.set('view engine', 'jade');
app.enable('trust proxy');
app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(helmet.xframe());
//app.use(helmet.iexss());
//app.use(helmet.contentTypeOptions());
//app.use(helmet.cacheControl());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(config.cookie_secret));
app.use(express.session({
  secret: config.session_secret,
  key: 'sid',
  //cookie: {httpOnly: true, secure: true}
  cookie: {httpOnly: true},
  store: new MongoStore({
    url: config.db
  })
}));
app.use(express.static(__dirname + '/public', {maxAge: 60000}));  // 1min
app.use(express.compress());
app.use(app.router);

// development only
if ('development' == app.get('env')){
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

//make these libraries available on our view engine
app.locals._      = require('underscore');
app.locals._.str  = require('underscore.string');
app.locals.moment = require('moment');


require('./config/routes')(app);


http.createServer(app).listen(app.get('port'), function(){
  console.log('DevHelpers app listening on port ' + app.get('port') + ', running in ' + app.settings.env + ' mode.');
});