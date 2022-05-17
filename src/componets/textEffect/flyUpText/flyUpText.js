import React, { useEffect } from 'react';
import './flyUpText.css';

const FlyUpText = () => {
	useEffect(() => {
		console.log('HOLAA');
		textEffect('fly-in-out');
	}, []);

	return (
		<div
			id='bodyy'
			style={{
				height: '100vh',
				width: '100%',
				backgroundColor: 'black',
			}}
		>
			<div id='flytext'>hola mundo loco</div>
		</div>
	);
};

export default FlyUpText;

function textEffect(animationName) {
	var paragraph = document.getElementById('flytext');
	var text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect() {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100);
	}

	addEffect();
}
