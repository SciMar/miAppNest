//If - Else 
//console.log("=== IF - ELSE ===")
const numero =10

if (isNaN (numero)){
    console.log("Entrada inválidad, no es un número");
    return;
} else if (numero %2 === 0){
    console.log("Es par")
}else {
    console.log("Es impar");
}

//SWITCH usarlo cuando la lógica es muy grande y es menos complicado que el if else
console.log ("===SWITCH ===")

const option = 2;

switch (option) {
    case 1:
        console.log("Medicina general")
        break;
    case 2:
        console.log("Odontología")
        break;
    case 3:
        console.log("Psicología")
        break;
    default:
        break;
}

//CICLO: FOR

console.log("===FOR===")

for (let index = 0; index <=5; index ++){
    console.log(`Vuelta número: ${index}`); //template strings
}

//While: hacer algo y que siga funcionad0o hasta que suceda otra cosa

console.log("=== WHILE ==");

let contador = 1;

while (contador<=10){
    console.log(`Vamos en el número: ${contador}`)
    contador ++;
}



