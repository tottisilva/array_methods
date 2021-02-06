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

// Existe ao menos um character masculino?
const oneMaleCharater = characters.some((character) =>{
    return character.gender === 'male'
});
console.log(oneMaleCharater);

// Existe algum charater com olhos azuis?
const oneBlueEyes = characters.some((character) =>{
    return character.eye_color === 'blue'
});
console.log(oneBlueEyes);

// Existe algum character maior que 210 ?? 
const tallerThen = characters.some((character) =>{
    return character.height > 210
});
console.log(tallerThen);

// Existe algum character com a massa menor que 50 ?
const massLess = characters.some((character) =>{
    return character.mass < 50 
});
console.log(massLess);
