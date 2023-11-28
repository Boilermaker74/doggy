const { Post } = require("../models");

const postdata = [
  {
    title: "Warp Drive",
    content:
      "You can never reach warp 10. Never!",
    user_id: 1,
  },
  {
    title: "Flux Capacitor",
    content:
      "Flux capacitor needs 1.21 gigawatts.",
    user_id: 2,
  },
  {
    title: "Resistance",
    content:
      "Resistance is futile.",
      user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
