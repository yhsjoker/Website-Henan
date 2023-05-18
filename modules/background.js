var canvas = document.getElementById("my-canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
});

var ctx = canvas.getContext("2d");
var particles = [];
var particleCount = 60;

function init() {
	particles = [];
	for (var i = 0; i < particleCount; i++) {
		particles.push(new Particle());
	}
}

function Particle() {
	this.x = Math.random() * canvas.width;
	this.y = -Math.random() * canvas.height / 2;
	this.speed = 2 + Math.random() * 5;
	this.radius = 2 + Math.random() * 2;
	this.length = this.radius * 4;
	this.angle = Math.PI / 4 + Math.random() * Math.PI / 2;
	this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
	this.alpha = 1;
	this.draw = function() {
		ctx.globalAlpha = this.alpha;
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + this.length * Math.cos(this.angle), this.y + this.length * Math.sin(this.angle));
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.radius;
		ctx.stroke();
	};
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < particles.length; i++) {
		particles[i].y += particles[i].speed;
		if (particles[i].y > canvas.height) {
			particles[i].x = Math.random() * canvas.width;
			particles[i].y = -Math.random() * canvas.height / 2;
			particles[i].speed = 2 + Math.random() * 5;
			particles[i].radius = 3 + Math.random() * 2;
			particles[i].length = particles[i].radius * 5;
			particles[i].angle = Math.PI / 4 + Math.random() * Math.PI / 2;
			particles[i].color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
		}
		particles[i].alpha = 1 - particles[i].y / canvas.height;
		particles[i].draw();
	}
	requestAnimationFrame(draw);
}

init();
draw();