function ordenarNumeros() {

    let num1 = prompt("Ingresa el primer número:");
    let num2 = prompt("Ingresa el segundo número:");
    let num3 = prompt("Ingresa el tercer número:");

   
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.error("Uno o más valores ingresados no son números. Inténtalo de nuevo.");
        document.getElementById("resultados").innerHTML = `
            <p class="error">Uno o más valores ingresados no son números. Inténtalo de nuevo.</p>
        `;
        return;
    }

    let mensajeIgualdad = "";
    if (num1 === num2 && num2 === num3) {
        mensajeIgualdad = "Todos los números son iguales.";
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        mensajeIgualdad = "Dos de los números son iguales.";
    } else {
        mensajeIgualdad = "Todos los números son diferentes.";
    }

    const numeros = [num1, num2, num3];
    const numerosMayorAMenor = [...numeros].sort((a, b) => b - a);
    const numerosMenorAMayor = [...numeros].sort((a, b) => a - b);

    const mayor = numerosMayorAMenor[0];
    const medio = numerosMayorAMenor[1];
    const menor = numerosMayorAMenor[2];

    console.log("Números ordenados de mayor a menor:", numerosMayorAMenor.join(", "));
    console.log("Números ordenados de menor a mayor:", numerosMenorAMayor.join(", "));
    console.log(`Mayor: ${mayor}, Medio: ${medio}, Menor: ${menor}`);
    console.log(mensajeIgualdad);

    document.getElementById("resultados").innerHTML = `
        <p class="resultado">Números de mayor a menor: ${numerosMayorAMenor.join(", ")}</p>
        <p class="resultado">Números de menor a mayor: ${numerosMenorAMayor.join(", ")}</p>
        <p class="resultado">Mayor: ${mayor}</p>
        <p class="resultado">Medio: ${medio}</p>
        <p class="resultado">Menor: ${menor}</p>
        <p class="mensaje">${mensajeIgualdad}</p>
    `;
}

ordenarNumeros();
