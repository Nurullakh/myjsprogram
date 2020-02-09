class Game {
	constructor() {
		this.btn = document.querySelector('.game-btn')
		this.img = document.querySelectorAll('.game-grid')
		this.divScore = document.querySelector('.game-score')
		this.indexGame = Math.floor(Math.random() * 9)
		this.score = 0
	}

	start() {
		this.divScore.innerHTML = `Крот был пойман 0 раз`
		let imgInTime = this.img
		let timerScrore = 0
		let time = setInterval(function() {
			let indexTime = Math.floor(Math.random() * 9)
			imgInTime[indexTime].classList.add('game-crot')
			setTimeout(function() {
				imgInTime[indexTime].classList.remove('game-crot')
			}, 500)
			timerScrore++
			if (timerScrore === 10) {
				clearInterval(time)
			}
		}, 2000)
	}
}
