const { User } = require("../models");

const userdata = [
  {
    username: "Captain Picard",
    password: "password123",
  },
  {
    username: "Doc Brown",
    password: "password1234",
  },
  {
    username: "The Borg",
    password: "password12345",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
