for(let i = 1; i <= 16; i++) {
	const myDiv = document.createElement('div');
	document.body.appendChild(myDiv);
}

function random(number) {
	return Math.floor(Math.random() * number);
}

function bgChange() {
	const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol;
}

const divs = document.querySelectorAll('div');

for(let i = 0; i < divs.length; i++) {
	divs[i].onclick = function(e) {
		e.target.style.backgroundColor = bgChange();
	}
}