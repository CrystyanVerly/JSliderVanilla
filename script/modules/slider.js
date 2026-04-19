import * as dragHandle from './drag/dragHandles.js';

export default class Slider {
	constructor({ wrapper, track, config = {} }) {
		this.sliderWrapper = document.querySelector(wrapper);
		this.sliderTrack = document.querySelector(track);

		if (!this.sliderWrapper || !this.sliderTrack) {
			console.warn(`"wrapper" and/or "rail" containers not found.`);
			return;
		}

		this.config = {};

		this.distance = { initial: 0, moving: 0, final: 0 };

		this.binderEvents();
	}

	init() {
		this.mainListener();
		return this;
	}

	binderEvents() {
		Object.assign(this, dragHandle);

		const toBind = ['onStart', 'onMoving', 'onFinal'];
		toBind.forEach((m) => (this[m] = this[m].bind(this)));
	}

	mainListener() {
		this.sliderWrapper.addEventListener('pointerdown', this.onStart);
	}
}
