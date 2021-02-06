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
//Será que todos os personagens teem olhos azuis?
const allBlueEyes = characters.every((character) =>{
    return character.eye_color === 'blue';
});
console.log(allBlueEyes);

// Será que todos os personagens tem a massa mais de 40 ?
const allMassMore = characters.every((character) => character.mass > 40);
console.log(allMassMore);

// Será que todos os personagens medem menos que 200 ?? 
const allHeigth = characters.every((character) => character.height < 200);
console.log(allHeigth);

// Será que todos os personagens são masculinos ?
const allGenderMale = characters.every((character) => character.gender === 'male');
console.log(allGenderMale);