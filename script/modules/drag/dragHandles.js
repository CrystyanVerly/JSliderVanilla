export function onStart(e) {
	e.preventDefault();
	this.distance.initial = Math.round(e.clientX);
	this.sliderWrapper.addEventListener('pointermove', this.onMoving);
	window.addEventListener('pointerup', this.onFinal);
}

export function onMoving({ clientX }) {
	this.moveItem(this.trackOnMoving(clientX), false);
}

export function moveItem(distX, transition = true) {
	this.sliderTrack.style.transform = `translate3d(${distX}px, 0px, 0px)`;
	this.sliderTrack.style.transition = transition
		? `transform .3s ease`
		: 'none';
}

export function trackOnMoving(clientX) {
	const calcDist = Math.round(clientX - this.distance.initial * 1.1);
	this.distance.moving = calcDist;
	return this.distance.final + calcDist;
}

export function onFinal() {
	this.sliderWrapper.removeEventListener('pointermove', this.onMoving);
	window.removeEventListener('pointerup', this.onFinal);
	this.distance.final += this.distance.moving;
}
