import './snow.scss';

const Snow = () => {
	let array = [];

	for (let i = 0; i < 200; i++) {
		array.push(i);
	}

	return array.map((div) => {
		<div className='snow'></div>;
	});
};

export default Snow;
