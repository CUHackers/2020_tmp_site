/*
* @Author: charliegallentine
* @Date:   2019-12-20 11:35:15
* @Last Modified by:   charliegallentine
* @Last Modified time: 2019-12-20 11:42:45
*/
var moving_squares = document.getElementsByClassName('movement');

for (var i = 0; i < moving_squares.length; i++)
{
	console.log(i);
	setInterval(ellipse, 100, moving_squares[i], 1, 20);
	// console.log(parseInt(moving_squares[i].style.top,10));
	// console.log("Left: %d", moving_squares[i].style.left);
}

function ellipse(square, w, h)
{
	var now = new Date();
	console.log(parseInt(square.style.marginTop,10) + (Math.sin(now.getTime()/10) * h));

	square.style.marginTop = parseInt(square.style.marginTop,10) + (Math.sin(now.getTime()/10) * h) + 'px';
	square.style.marginLeft = parseInt(square.style.marginLeft,10) + (Math.cos(now.getTime()/10) * w) + '%';
}