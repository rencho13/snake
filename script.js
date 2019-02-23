window.onload = function () {

	var canvasWidth = 900;
	var canvasHeight = 600;

	var blockSize

	var ctx;
	var delay = 100;
	var x = 0;
	var y = 0;

	init();


	function init() {

		var canvas = document.createElement('canvas');
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		canvas.style.border = "1px solid";
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		refreshCanvas();
	}

	function refreshCanvas() {
		x += 10;
		y += 10;
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		ctx.fillStyle = "#ff0000";
		ctx.fillRect(x, y, 100, 50);
		setTimeout(refreshCanvas, delay);

	}




}
