
//cuenta

const rl = require("readline").createInterface({
    input:process.stdin,
    output: process.stdout,
});

let account = {
    accNumber: "1001",
    propietario: "Marcela",
    pin: "1234",
    saldo: 50000
}

//**
// 1. Multi cuentas */

//**
// 1.   Consultar saldo
// 2. Depositarv dinero
// 3. Retitrar dinero
// 4. Salir */
/*
*@typeParam {string} pregunta: Pregunta que quiero haverke al usuasrio
*@returns {string} 
*/

//permite que el usuasrio interactúe con la máquina por medio del teclado para que la lógica realice la pregunta y el usuario la responda.
const preguntar = (pregunta) => {
    return new Promise ((resolve) => {
        rl.question (pregunta, (respuesta)=> resolve (respuesta))

    })
};

const iniciar = async () => {
    console.log ("==== BIENVENIDOS AL CAJERO ====")

    const numeroIngresado = await preguntar ("Digite el número de su cuenta: ");
    const pinIngresado = await preguntar ("Digite el pin: ");

    if (numeroIngresado === account.accNumber && pinIngresado === account.pin) {
        console.log ("Todo melo");
    }else {
        console.log ("Pailas");
        rl.close();
    }
};

iniciar ();
