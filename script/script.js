import Slider from './modules/Slider.js';

const banner = new Slider({
	wrapper: `[data-slider="wrapper"]`,
	track: `[data-slider="track"]`,
});

console.log(banner);
banner.init();
