(function() {
	var clockEl = document.createElement('div');

	function updateClock() {
		var currTime = new Date();
		clockEl.textContent = currTime.strftime('%l:%M %p');
		setTimeout(updateClock, 10000);
	}

	function onReadyStateChange() {
		if (document.readyState === 'complete') {
			document.body.appendChild(clockEl);
			updateClock();
			onWindowResize();
		}
	}
	document.addEventListener('readystatechange', onReadyStateChange);

	function onWindowResize() {
		var wHeight = window.innerHeight;
		clockEl.style.fontSize = (0.26 * wHeight);
		clockEl.style.marginTop = (0.34 * wHeight);
	}

	window.addEventListener('resize', onWindowResize);
})();