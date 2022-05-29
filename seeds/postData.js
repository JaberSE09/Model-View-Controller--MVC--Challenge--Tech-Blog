const { Post } = require("../models");

const postData = [
  {
    title: "Donec posuere metus vitae ipsum.",
    desc: ",ll;kfdl;gkf;ll;",
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    dsc: "fdfdjkjk fdgjkfdjlkjgkljklkj jilkjlkdj;fd",
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    desc: "donec kdlal;dsakdsal;kldsakdl;k;l'kdsa'sadkldsads;lkdas' kdsaldsa;k;lddsa  ldsa;k dsal;dsa dsa",
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
