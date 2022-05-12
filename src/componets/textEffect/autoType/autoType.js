import './autoType.css';
import { useRef, useEffect } from 'react';

const AutoType = () => {
	const textRef = useRef(null);

	useEffect(() => {
		consoleText(
			textRef.current,
			[
				'Bienvenido al Futuro del desarrollo Web',
				'Ultima tecnologia en SoftWare',
				'Made with Love.',
			],
			'text',
			['tomato', 'rebeccapurple', 'lightblue']
		);
	}, []);

	return (
		<div className='console-container'>
			<span id='text'></span>
			<div ref={textRef} className='console-underscore' id='console'>
				&#95;
			</div>
		</div>
	);
};

// function([string1, string2],target id,[color1,color2])
function consoleText(con, words, id, colors) {
	if (colors === undefined) colors = ['#fff'];
	var visible = true;
	//var con = document.getElementById('console');
	let vel = 70;
	var letterCount = 1;
	var x = 1;
	var waiting = false;
	var target = document.getElementById(id);

	target.setAttribute('style', 'color:' + colors[0]);
	window.setInterval(function () {
		if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = words[0].substring(0, letterCount);
			window.setTimeout(function () {
				var usedColor = colors.shift();
				colors.push(usedColor);
				var usedWord = words.shift();
				words.push(usedWord);
				x = 1;
				target.setAttribute('style', 'color:' + colors[0]);
				letterCount += x;
				waiting = false;
			}, 1000);
		} else if (
			letterCount === words[0].length + 1 &&
			waiting === false
		) {
			waiting = true;
			window.setTimeout(function () {
				x = -1;

				letterCount += x;
				waiting = false;

				target.setAttribute(
					'style',
					'animation: vanish; transition: all 1.4s'
				);
			}, 1000);
		} else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount);
			letterCount += x;
		}
	}, vel);

	window.setInterval(function () {
		if (visible === true) {
			con.className = 'console-underscore hidden';
			visible = false;
		} else {
			con.className = 'console-underscore';

			visible = true;
		}
	}, 400);
}

export default AutoType;
