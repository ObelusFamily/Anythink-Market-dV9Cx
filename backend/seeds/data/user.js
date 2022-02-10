const { faker } = require("@faker-js/faker");

const SEED_COUNT = 100;
const FAKE_PASSWORD = "test1234!@#$";

const adminUser = {
  username: "admin",
  email: "admin@anythink.com",
  password: "admin",
  role: "admin",
};
const fakeData = Array.from({ length: SEED_COUNT }, () => ({
  username: faker.name.findName().replaceAll(" ", "").replaceAll(".", ""),
  email: faker.internet.email(),
  password: FAKE_PASSWORD,
  role: "user",
}));

fakeData.push(adminUser);

module.exports = fakeData;
