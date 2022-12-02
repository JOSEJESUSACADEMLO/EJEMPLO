const numberArray=[3,7,10,12,4,567,809,3,6];


// FIND  EJECUTA UNA UNCION CON CADA ELEMENTO SOLO DEVUELVE UN VALOR DE RETORNO EL PRIMER ELEMENTO QUE ENCUENTRE

const retornoFind= numberArray.find(num=>num>10);
console.log(retornoFind);

console.log(numberArray.filter(num=> num>10));


const pets = [
    {
        specie: "Gato",
        name: "Juno",
        age: 5
    },
    {
        specie: "Gato",
        name: "Canela",
        age: 1
    },
    {
        specie: "Perro",
        name: "Jupiter",
        age: 6
    },
    {
        specie: "Perro",
        name: "Ramon",
        age: 8
    },
    {
        specie: "Ajolote",
        name: "Nemo",
        age: 1
    },
    {
        specie: "Hamster",
        name: "Benito",
        age: 2
    },
    {
        specie: "Gato",
        name: "Aurora",
        age: 3
    }
]


const retornoPetAge=pets.find(pet=>pet.age>5);
console.log(retornoPetAge)


function getPetByAge(age){
    const retornoPetAge =pets.find(pet=>pet.age>age)
    if(retornoPetAge){
        return retornoPetAge
    }else{
        return "no encontro ninguna mascota"
    }
}

console.log(getPetByAge(5));
console.log(getPetByAge(30));

// UNA FUNCION QUE DEVUELVE A UAN MASCOTA EN ESPECIICO LA BIUISQUEDA SE LLEVA ACABO CON EL 
// NOMBRE 
// EL NO,MBRE D ELA MASCOTA VA A RECIBIR UN PARAMETRO

function findPet(names){

    const retornoPetname =pets.find(pet=>pet.name==names);
    if(retornoPetname){
        return retornoPetname
    }else{
        return "no encontro ninguna mascota"
    }
}
console.log(findPet("Aurora"))