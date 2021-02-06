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

//Total da massa de todos os charecters 
const totalMass = characters.reduce((acc, cur) =>  acc + cur.mass,0);
console.log(totalMass);

// Total de altura 
const totalHeigth = characters.reduce((acc, cur) => acc + cur.heigth, 0);
console.log(totalHeigth);

// Criando um objecto com os que tem os olhos de cor azul 
const charactersByEyeColor = characters.reduce((acc, cur) =>{
    const color = cur.eye_color;
    if(acc[color]){
        acc[color] ++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
console.log(charactersByEyeColor);

// Total de numero de characters no momes de todos personagens
const totalCharactersName = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalCharactersName);