export default class Slider {
	constructor({ wrapper, track, config = {} }) {
		this.sliderWrapper = document.querySelector(wrapper);
		this.sliderTrack = document.querySelector(track);

		if (!this.sliderWrapper || !this.sliderTrack) {
			console.warn(`"wrapper" and/or "rail" containers not found.`);
			return;
		}

		this.config = {};
	}
}
