const hours_input_element = document.getElementById("hours-input") as HTMLInputElement
const wage_input_element = document.getElementById("wage-input") as HTMLInputElement
const submit_button = document.getElementById("submit-button") as HTMLInputElement
const output_label = document.getElementById("output-text") as HTMLLabelElement

function isNumber(value: any): value is number {
	return !isNaN(Number(value))
}

function calculatePay() {
	const hours = Number(hours_input_element.value)
	const wage = Number(wage_input_element.value)
	
	if (isNumber(hours) && isNumber(wage)) {
		const total_pay = (hours * wage).toFixed(2)
		output_label.textContent = `Your total pay will be: £${total_pay}`
	}
}

function onKeyPress(ev: KeyboardEvent) {
	if (ev.key === "Enter") {
		calculatePay()
	}
}

submit_button.addEventListener("click", calculatePay)
hours_input_element.addEventListener("keypress", onKeyPress)
wage_input_element.addEventListener("keypress", onKeyPress)