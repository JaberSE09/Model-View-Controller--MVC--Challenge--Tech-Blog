const { Post } = require("../models");

const postData = [
  {
    title: "Donec posuere metus vitae ipsum.",
    desc: ",ll;kfdl;gkf;ll;",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    desc: "fdfdjkjk fdgjkfdjlkjgkljklkj jilkjlkdj;fd",
    user_id: 1,

  },
  {
    title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    desc: "donec kdlal;dsakdsal;kldsakdl;k;l'kdsa'sadkldsads;lkdas' kdsaldsa;k;lddsa  ldsa;k dsal;dsa dsa",
    user_id: 3,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
