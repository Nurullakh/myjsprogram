class Calculator {
	constructor() {
		this.plus = document.querySelector('.calculator-plus')
		this.minus = document.querySelector('.calculator-minus')
		this.time = document.querySelector('.calculator-time')
		this.divide = document.querySelector('.calculator-divide')
		this.remove = document.querySelector('.calculator-remove')
		this.answer = document.querySelector('.calculator-answer')
		this.inputOne = document.querySelector('.calculator-input-one')
		this.inputTwo = document.querySelector('.calculator-input-two')
	}

	equlRemove() {
		calculator.inputOne.value = null
		calculator.inputTwo.value = null
		calculator.answer.textContent = null
	}

}