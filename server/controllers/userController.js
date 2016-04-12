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
  username: Sequelize.STRING,
  password: Sequelize.STRING,
})

//creates individual message
UserController.create((username, password, color1){
  username: 'Test User',
  password: 'Test Password',
  color1: 'red'
});




module.exports = UserController;
