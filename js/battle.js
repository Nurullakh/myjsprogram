class Battle {
	constructor() {
		this.arr = document.querySelectorAll('.battle-grid')
		this.btn = document.querySelector('.battle-btn')
		this.battleText = document.querySelector('.battle-text')
		this.count = 0
		this.winnerLine = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6],

		]
	}
	isWinner() {
		let s = (this.count % 2 === 0) ? 'X' : 'O';
		for (let i=0; i<8;i++) {
			let line = this.winnerLine[i];
			if (this.arr[line[0]].textContent === s
				&& this.arr[line[1]].textContent === s
				&& this.arr[line[2]].textContent === s) {
				this.battleText.textContent = `Результат - победил ${s}`
				this.arr.forEach((arr, i) => {
					this.arr[i].classList.remove('battle-cross', 'battle-zero')
					this.count = 0
					this.arr[i].textContent = null
				})
				
			} 
		}
	}
}