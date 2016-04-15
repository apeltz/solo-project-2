const Sequelize = require('sequelize');

const sequelize = new Sequelize('soloproject','soloprojectuser', 'letmein', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.sync({logging: console.log}).then(()=>{

})

var UserController = sequelize.define('usertable', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  un: Sequelize.STRING,
  pw: Sequelize.STRING,
  color1: Sequelize.STRING,
})


//creates individual message
UserController.create ({
  un: 'Test User',
  pw: 'Test Password',
  color1: 'Test Color'
});

// UserController.login ({
//   un: 'Test User',
//   pw: 'Test Password',
//   color1: 'Test Color'
// });




module.exports = UserController;
