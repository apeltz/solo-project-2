const Sequelize = require('sequelize');

const sequelize = new Sequelize('goosechase','goosechase', 'letmein', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.sync({logging: console.log}).then(()=>{

})

var ReplyEmail = sequelize.define('replyemail', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  message: Sequelize.STRING,
})

//creates individual message
ReplyEmail.create({
  message: 'Test message here'
});
