
//cuenta

const rl = require("readline").createInterface({
    input:process.stdin,
    output: process.stdout,
});


const preguntar = (pregunta) => {
    return new Promise ((resolve) => {
        rl.question (pregunta, (respuesta)=> resolve (respuesta))
    });
};

const menuCalculadora = async() => {
    console.log("\n========🧮CALCULADORA🧮==========")
    console.log("1. Sumar ➕")
    console.log("2. Restar➖")
    console.log("3. Multiplicar✖️")
    console.log("4. Dividir➗")
    console.log("5. Potencia")
    console.log("6. Salir\n")

    const option = await preguntar ("Selecciona una operación matemática: ")

    if (option === "6") {
        console.log("👋 Gracias por usar esta calculadora ");
        rl.close();
        return
    }

    const numberOne= await preguntar ("Digite el primer número: ");
    const numberTwo = await preguntar ("Digite el segundo número: ");

    switch (option) {
        case "1":
            console.log("=======Suma=======");
            console.log(`La suma a calcular es: ${numberOne} + ${numberTwo} = ${Number(numberOne) + Number(numberTwo)}`);
            break;
        case "2":
            console.log("=======Resta=======");
            console.log(`La resta a calcular es: ${numberOne} - ${numberTwo} = ${Number(numberOne) - Number(numberTwo)}`);
            break;
        case "3":
            console.log("=======Multiplicación=======");
            console.log(`La multiplicación a calcular es: ${numberOne} x ${numberTwo} =  ${Number(numberOne) * Number(numberTwo)}`);
            break;
        case "4":
            console.log("=======División=======");
            console.log(`La división a calcular es:  ${numberOne} / ${numberTwo} = ${Number(numberOne) / Number(numberTwo)}`);
            break;
        case "5":
            console.log("=======Potencia=======");
            console.log(`La potencia: ${Number(numberOne) ** Number(numberTwo)}`);
            break;
    }
    menuCalculadora();
}

menuCalculadora();
