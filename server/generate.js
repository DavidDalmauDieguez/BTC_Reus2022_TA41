var faker = require('faker');

var database = { personajes: [] };

for (var i = 1; i <= 5; i++){
  database.personajes.push({
    id: i,
    name: faker.name,
    status: faker.status,
    species: faker.species,
    gender: faker.gender,
    origin: faker.origin,
    location: faker.location,
    image: faker.image
  });
}

console.log(JSON.stringify(database));
