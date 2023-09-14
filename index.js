const AFP = 0.0725;
const ISSS = 0.03;

var inputSalary = document.getElementById("inputSalary");
var divResponse = document.getElementById("divResponse");

function calculateSalary() {
    var salary = parseFloat(inputSalary.value);

    if (isNaN(salary) || salary <= 0) {
        alert("Por favor, ingrese un salario válido.");
        return;
    }

    var salaryAfp = salary * AFP;
    var salaryIsss = salary * ISSS;

    var finalSalary = salary - salaryAfp - salaryIsss;
    divResponse.innerHTML = `
    <h1>Descuentos:</h1>
    <p style="color:#4da6ff">Salario Ingresado: ${salary}</p>
    <p style="color:#ff751a">Descuento AFP: ${salaryAfp.toFixed(2)}</p>
    <p style="color:#ff751a">Descuento ISSS: ${salaryIsss.toFixed(2)}</p>
    <p style="color:#ffd11a">Total Descuento: ${(salaryAfp+salaryIsss).toFixed(2)}</p>
    <hr style="margin-top:6px">
    <p class="salaryD">Salario Neto: ${finalSalary.toFixed(2)}</p>` 
}



