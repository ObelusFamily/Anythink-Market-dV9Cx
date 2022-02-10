const { faker } = require("@faker-js/faker");

const SEED_COUNT = 100;

const fakeData = Array.from({ length: SEED_COUNT }, () => ({
  body: faker.lorem.sentence(20),
}));

module.exports = fakeData;
