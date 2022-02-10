require("dotenv").config();
const seeder = require("mongoose-seed");
const userSeed = require("./data/user");
const itemSeed = require("./data/item");
const commentSeed = require("./data/comments");

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

const seedPaths = [
  "./models/User.js",
  "./models/Item.js",
  "./models/Comment.js",
];
const seedModels = ["User", "Item", "Comment"];
const seedData = [
  {
    model: "User",
    documents: userSeed,
  },
  {
    model: "Item",
    documents: itemSeed,
  },
  {
    model: "Comment",
    documents: commentSeed,
  },
];

seeder.connect(process.env.MONGODB_URI, () => {
  seeder.loadModels(seedPaths);
  seeder.clearModels(seedModels, () => {
    seeder.populateModels(seedData, () => {
      seeder.disconnect();
    });
  });
});
