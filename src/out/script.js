var hours_input_element = document.getElementById("hours-input");
var wage_input_element = document.getElementById("wage-input");
var submit_button = document.getElementById("submit-button");
var output_label = document.getElementById("output-text");
function isNumber(value) {
    return !isNaN(Number(value));
}
function calculatePay() {
    var hours = Number(hours_input_element.value);
    var wage = Number(wage_input_element.value);
    if (isNumber(hours) && isNumber(wage)) {
        var total_pay = (hours * wage).toFixed(2);
        output_label.textContent = "Your total pay will be: \u00A3" + total_pay;
    }
}
function onKeyPress(ev) {
    if (ev.key === "Enter") {
        calculatePay();
    }
}
submit_button.addEventListener("click", calculatePay);
hours_input_element.addEventListener("keypress", onKeyPress);
wage_input_element.addEventListener("keypress", onKeyPress);
