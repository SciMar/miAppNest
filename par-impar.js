//Básico
/*
const numero =10


if (isNaN (numero)){
    console.log("Entrada inválidad, no es un número");
    return;
} else if (numero %2 === 0){
    console.log("Es par")
}else {
    console.log("Es impar");
}

*/

//Avanzado

const rl = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout,
});

rl.question("Escribe un número: ", (n) => {
    const numero = Number (n);
if (isNaN (numero)){
    console.log("Entrada inválida, no es un número");
    return;
} else if (numero %2 === 0){
    console.log("Es par")
}else {
    console.log("Es impar");
}
rl.close()
});
