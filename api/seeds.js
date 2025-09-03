const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const User = require('./models/userModel');
const admin = {
  name: 'admin',
  email: 'admin@gmail.com',
  phone: '0945915868',
  gender: 'male',
  birthdate: '2002-2-2',
  password: '123454321',
  role: 'admin',
};
if (process.env.NODE_ENV === 'development') {
  mongoose
    .connect(process.env.DATABASE_LOCAL)
    .then(async (result) => {
      await User.create(admin);
      console.log('create admin is success');
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  mongoose
    .connect(process.env.DATABASE)
    .then(async (result) => {
      await User.create(admin);
      console.log('create admin is success');
    })
    .catch((err) => {
      console.log(err);
    });
}
