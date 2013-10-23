module.exports = {
  development: {
    db: 'mongodb://localhost/devhelpersdb',
    session_secret: '8590dd152c7bbf2392e1f084be19e4ee',
    cookie_secret: '41c797975fa82d0d44d671cee5f223e3'
  }, 
  production: {
    db: process.env.MONGOLAB_URI,                            //process.env.DB
    session_secret: '8590dd152c7bbf2392e1f084be19e4ee',
    cookie_secret: '41c797975fa82d0d44d671cee5f223e3'
  }
}