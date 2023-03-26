const binaryInput = document.querySelector("#binary-input")
const binaryOutput = document.querySelector("#decimal-output")
const zeroBtn = document.querySelector(".zero")
const oneBtn = document.querySelector(".one")

function Converter(n) {
	let num = n
	let dec = 0

	let base = 1

	let temp = num
	while (temp) {
		let lastDigit = temp % 10
		temp = Math.floor(temp / 10)
		dec += lastDigit + base
		base = base * 2
	}
	return dec
}

const getNum = () => {
	let num = binaryInput.value
	binaryOutput.value = Converter(num)
	console.log(num)
}

zeroBtn.addEventListener("click", () => {
	const zero = zeroBtn.innerHTML
	binaryInput.value += zero
	getNum()
})
oneBtn.addEventListener("click", () => {
	const one = oneBtn.innerHTML
	binaryInput.value += one
	getNum()
})
