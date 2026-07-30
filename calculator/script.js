const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if (value === "AC") {
            display.value = "";
        }
        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
    if (display.value === "") return;

    try {
        let expression = display.value;

        // Convert percentage to decimal
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        display.value = eval(expression);
    }
    catch {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}
        else {
            // Convert symbols to JavaScript operators
            if (value === "×") value = "*";
            if (value === "÷") value = "/";
            if (value === "−") value = "-";
            display.value += value;
        }
    });
});