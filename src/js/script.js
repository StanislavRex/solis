const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', function () {
	const posterImage = document.querySelector('.videoposter__img');
	const iframePlayer = document.querySelector('.iframe_player');
	const videoIframeContainer = document.querySelector('.video__iframe');
	posterImage.addEventListener('click', function () {
		posterImage.style.display = 'none';
		videoIframeContainer.classList.add('playing');
		let iframeSrc = iframePlayer.src;
		if (iframeSrc.indexOf('?') > -1) {
			iframePlayer.src += '&autoplay=1';
		} else {
			iframePlayer.src += '?autoplay=1';
		}
	});

	iframePlayer.addEventListener('click', function () {
		posterImage.style.display = 'none';
		videoIframeContainer.classList.add('playing');
		let iframeSrc = iframePlayer.src;
		if (iframeSrc.indexOf('?') > -1) {
			iframePlayer.src += '&autoplay=1';
		} else {
			iframePlayer.src += '?autoplay=1';
		}
	});

	videoIframeContainer.addEventListener('click', function () {
		posterImage.style.display = 'none';
		videoIframeContainer.classList.add('playing');
		let iframeSrc = iframePlayer.src;
		if (iframeSrc.indexOf('?') > -1) {
			iframePlayer.src += '&autoplay=1';
		} else {
			iframePlayer.src += '?autoplay=1';
		}
	});
});
