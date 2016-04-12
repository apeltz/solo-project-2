const pg = require('pg');
const uri = 'postgress://goosechase:letmein@localhost:3000/database'


const db = {};

pg.connect(uri, (err, db_)=> {
  if(err) throw new Error(err);
  db.conn = db_;
});

module.exports = db;
