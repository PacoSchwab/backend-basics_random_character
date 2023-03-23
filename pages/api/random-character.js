import { Chance } from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    gender: chance.gender(),
    avatar: chance.avatar(),
    animal: chance.animal(),
    birthday: chance.birthday(),
  };

  response.status(200).json(character);
}
