
//cuenta

const rl = require("readline").createInterface({
    input:process.stdin,
    output: process.stdout,
});
//cuentas disponibles

let account = [{
    accNumber: "1001",
    propietario: "Marcela",
    pin: "1234",
    saldo: 50000
},
{
    accNumber: "1002",
    propietario: "Paola",
    pin: "456",
    saldo: 2000
},

{
    accNumber: "1003",
    propietario: "Angie",
    pin: "789",
    saldo: 3000
}]

//cuenta logueada
let cuentaActiva = null;

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
    });
};

const menu = async() => {
    console.log("\n========MENU==========")
    console.log (`Usuario: ${cuentaActiva.propietario} | `)
    console.log("1. Consultar saldo")
    console.log("2. Depositar dinero")
    console.log("3. Retirar dinero")
    console.log("4. Cerrar sesión")
    console.log("5. Salir\n")


    const opcionIngresada = await preguntar ("Selecciona una opción: ")

    switch (opcionIngresada) {
        case "1":
            console.log("=======Consulta de saldo=======");
            console.log(`💰 Tu saldo actual es: $${account.saldo}`);
            break;
        case "2":
            console.log("=======Depositar dinero=======");
            const deposito = Number (await preguntar("Ingrese el valor a depositar: "));
            if (valorDeposito >0){
                account.saldo += deposito;
                console.log(`✅Depósito exitoso. Su nuevo saldo es: $${account.saldo}`);
            }else{
                console.log("Monto Inválido")
            } 
            break;
        case "3":
            console.log("=======Retirar dinero=======");
            const valorRetiro = Number (await preguntar ("Monto a retirar: "))
            
            if (valorRetiro>0 && valorRetiro <= account.saldo){
                account.saldo -= valorRetiro
                console.log(`Retiro exitoso. Su nuevo saldo es: $${cuenta.saldo}`);
            } else {
                console.log ("Fondos insuficientes");
            }

            break;
        case "4":
            console.log(
                "=====Gracias por usar el cajero, ¡Hasta Luego!====="
            );
            rl.close();
            return;
        default:   
            console.log("✖️Opción no válida");
        break;
    }
    menu();
}

const iniciar = async () => {
    console.clear();
    console.log ("==== BIENVENIDOS AL CAJERO ====")

    const numeroIngresado = await preguntar ("Digite el número de su cuenta: ");
    const pinIngresado = await preguntar ("Digite el pin: ");

    const cuentaIngresada =cuentas.find(
        (account)=>
        (account.numero === numeroIngresado) && (account.pin === pinIngresado)

    )

    if (numeroIngresado === account.accNumber && pinIngresado === account.pin) {
        console.log(`✅ Bienvenida/o ${account.propietario ?? 'Invitado'} ✅`);
        menu()
    }else {
        console.log ("Pailas");
        rl.close();
    }
};
iniciar ();
