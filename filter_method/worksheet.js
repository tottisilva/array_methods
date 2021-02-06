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
// Aqui filtramos os caracters que teem uma massa superior a 100
const greaterThan100Mass = characters.filter((character =>{
    return character.mass > 100
}));
console.log(greaterThan100Mass);

//Agora famos filtrar os mais pequenos 
const shortCharacters = characters.filter((character) =>{
    return caracter.height < 150;
});
console.log(shortCharacters); 

// Somente os masculinos
 const maleCharacters = characters.filter(character => character.gender === 'male');
console.log(maleCharacters); 
// Somente os femininos
const femaleCharacters = characters.filter(character => character.gender === 'female')
console.log(femaleCharacters);