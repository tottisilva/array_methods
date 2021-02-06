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

// Pela massa
const byMass = characters.sort((a,b) => {
    return a.mass - b.mass;
});
console.log(byMass); 
// Aqui irá returnar do menor para o maior, mas se fizermos b - a irá retornar do maior para o menor

// Pelo altura 
const byHeigth = characters.sort((a,b) =>{
    return b.height - a.height
});
console.log(byHeigth);

//Pelo nome (pela ordem alfabética, tambem podemos fazer de forma inversa)
// Como se trata de Strings temos que criar uma lógica , porque não podemos subtrair nomes 
const byName = characters.sort((a,b) =>{
    if(a.name < b.name) return -1;
    return 1;
});
console.log(byName);

// Pelo genero (neste caso iremos por os characters femininos em primeiro) sendo que o negativo vem primeiro 
const byGender = characters.sort((a,b) => {
    if(a.gender === 'female') return -1;
    return 1
});
console.log(byGender);
