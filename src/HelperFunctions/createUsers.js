import { faker } from "@faker-js/faker";
const robohashAvatars = require("robohash-avatars");
const createRandomUser = () => {
  let sex = faker.name.sexType();
  const interests = faker.random.words(5).split(" ");
  return {
    _id: faker.datatype.uuid(),
    birthday: faker.date.birthdate(),
    firstName: faker.name.firstName(sex),
    lastName: faker.name.lastName(sex),
    interests: interests,
  };
};

export { createRandomUser };
