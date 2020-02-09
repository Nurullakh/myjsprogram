let slider = new Slider()
slider.prev.addEventListener('click', function() {
	slider.prevClick()
})
slider.next.addEventListener('click', function() {
	slider.nextClick()
})



let game = new Game()
game.btn.addEventListener('click', function() {
	game.start()
})
game.img.forEach((arr, i) => {
	game.img[i].addEventListener('click', function() {
		if (game.img[i].classList.contains('game-crot')) {
			game.score++
			game.divScore.innerHTML = `Крот был пойман ${game.score} раз`
		}
	})
})



let battle = new Battle()
battle.arr.forEach(function(arr, i) {
	battle.arr[i].addEventListener('click', function(e) {
		if (battle.arr[i].classList.contains('battle-cross') || battle.arr[i].classList.contains('battle-zero')) {
			alert('no')
		} else {
			if (battle.count % 2 === 0) {
				battle.arr[i].textContent = 'X'
				battle.arr[i].classList.add('battle-cross')
				
			} else {
				battle.arr[i].textContent = 'O'
				battle.arr[i].classList.add('battle-zero')
			}
			battle.isWinner()			
			battle.count++
		}

		if (battle.count > 8) {
			battle.arr.forEach((arr, i) => {
				battle.arr[i].classList.remove('battle-cross', 'battle-zero')
				battle.count = 0
				battle.arr[i].textContent = null
				battle.battleText.textContent = 'Результат - ничья'
			})
			
		}

		battle.btn.addEventListener('click', function() {
			battle.arr[i].classList.remove('battle-cross', 'battle-zero')
			battle.count = 0
			battle.arr[i].textContent = null
			battle.battleText.textContent = null

		})	

	})
})



async function get(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(res => res.json());
	return response
}

for (let i=1;i<10;i++) {
	get(i)
		.then((data) => {
			let div = document.createElement('div')
			div.textContent = data.id + data.title
			document.querySelector('.post-text').append(div)
			
		})

}



let menu = document.querySelector('.menu')
let block = document.querySelector('.menu-block')
let burrger = document.querySelector('.menu-img')
let exit = document.querySelector('.menu-exit')
burrger.addEventListener('click', function(e) {
	burrger.src = ''
	block.style.display = 'block'
	exit.addEventListener('click', function() {
		burrger.src = 'https://img.icons8.com/android/24/000000/menu.png'
		block.style.display = 'none'		
	})
})



let calculator = new Calculator()

calculator.plus.addEventListener('click', function() {
	let equl = Number(calculator.inputOne.value) + Number(calculator.inputTwo.value)	
	calculator.answer.textContent = 'равно - ' + equl
	calculator.inputOne.value = null
	calculator.inputTwo.value = null
})

calculator.minus.addEventListener('click', function() {
	let equl = Number(calculator.inputOne.value) - Number(calculator.inputTwo.value)		
	calculator.answer.textContent = 'равно - ' + equl
	calculator.inputOne.value = null
	calculator.inputTwo.value = null
})

calculator.time.addEventListener('click', function() {
	let equl = Number(calculator.inputOne.value) * Number(calculator.inputTwo.value)
	calculator.answer.textContent = 'равно - ' + equl
	calculator.inputOne.value = null
	calculator.inputTwo.value = null
})

calculator.divide.addEventListener('click', function() {
	let equl = Number(calculator.inputOne.value) / Number(calculator.inputTwo.value)
	calculator.answer.textContent = 'равно - ' + equl
	calculator.inputOne.value = null
	calculator.inputTwo.value = null
})

calculator.remove.addEventListener('click', function() {
	calculator.equlRemove()

})