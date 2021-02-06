const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Um array com todos os nomes
const names = characters.map(character => {
    return character.name
});
console.log(names);

// Um array com todas as alturas
const heights = characters.map(character =>{
    return character.height
});
console.log(heights);

// Um array de objecto somente com as propriedades nome e altura
const namesAndHeigths = characters.map(characters =>( {name: characters.name, height: characters.height}));
console.log(namesAndHeigths);

// Um array só com o primeiro nome
const firstNames = characters.map(character => character.name.split(" ")[0]);
console.log(firstNames);