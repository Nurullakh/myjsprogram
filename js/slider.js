class Slider {
	constructor() {
		this.prev = document.querySelector('.slider-prev');
		this.next = document.querySelector('.slider-next');
		this.arrImg = ['img/beachone.jpg','img/beachtwo.jpg','img/beachthree.jpg'];
		this.img = document.querySelector('.slider-img');
		this.index = 0

	}
	prevClick() {
		if (this.index === 0) {
			return
		} else {
			this.index--
			this.img.src = this.arrImg[this.index]
		}
	}

	nextClick() {
		if (this.index === this.arrImg.length - 1) {
			return
		} else {
			this.index++
			this.img.src = this.arrImg[this.index]
		}
	}
}