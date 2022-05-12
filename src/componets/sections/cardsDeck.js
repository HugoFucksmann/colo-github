import './cardsDesck.css';

const cards = [
	{
		title: 'titulo card 1',
		subtitle: 'este es una descripcion de lo que va en la tarjeta',
	},
	{
		title: 'titulo card 2',
		subtitle: 'este es una descripcion de lo que va en la tarjeta',
	},
	{
		title: 'titulo card 3',
		subtitle: 'este es una descripcion de lo que va en la tarjeta',
	},
	{
		title: 'titulo card 4',
		subtitle: 'este es una descripcion de lo que va en la tarjeta',
	},
];

const CardsDeck = (props) => {
	return (
		<div class='container'>
			{cards.map((card) => (
				<div class='card'>
					<h3 class='title'>{card.title}</h3>
					<div class='bar'>
						<div class='filledbar'></div>
					</div>
					<h5 class='subtitle'>{card.subtitle}</h5>
				</div>
			))}
		</div>
	);
};

export default CardsDeck;
