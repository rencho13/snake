window.onload = function () {
	var canvas;
	var ctx;
	var delay = 100;
	var x = 0;
	var y = 0;
	
	init();
	
	
	function init() {

		canvas = document.createElement('canvas');
		canvas.width = 900;
		canvas.height = 600;
		canvas.style.border = "1px solid";
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		refreshCanvas();
	}

	function refreshCanvas() {
		x += 2;
		y += 2;
		ctx.clearRect(0,0,900,600);
		ctx.fillStyle = "#ff0000";
		ctx.fillRect(x, y, 100, 50);
		setTimeout(refreshCanvas,delay);		
	}
	


}
