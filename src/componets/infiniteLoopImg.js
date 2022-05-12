import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { useEffect } from 'react';

const InfiniteLoopImg = () => {
	useEffect(() => {
		infiniteLoop('imglist');
	}, []);

	return (
		<ImageList variant='masonry' cols={3} gap={8}>
			{itemData.map((item) => (
				<ImageListItem key={item.img}>
					<img
						src={`${item.img}?w=248&fit=crop&auto=format`}
						srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
						alt={item.title}
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

const itemData = [
	{
		img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
		title: 'Bed',
	},
	{
		img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
		title: 'Books',
	},
	{
		img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
		title: 'Sink',
	},
	{
		img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
		title: 'Kitchen',
	},
	{
		img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
		title: 'Blinds',
	},
	{
		img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
		title: 'Chairs',
	},
	{
		img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
		title: 'Laptop',
	},
	{
		img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
		title: 'Doors',
	},
	{
		img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
		title: 'Coffee',
	},
	{
		img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
		title: 'Storage',
	},
	{
		img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
		title: 'Candle',
	},
	{
		img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
		title: 'Coffee table',
	},
];

function infiniteLoop(id) {
	document.addEventListener('DOMContentLoaded', function () {
		// it's a div, that holds your news
		// it holds ul with news in li elements
		let div = document.getElementById(id);
		div.addEventListener('scroll', function () {
			let max_scroll = this.scrollHeight - this.clientHeight;
			let current_scroll = this.scrollTop;
			let bottom = 100;
			if (current_scroll + bottom >= max_scroll) {
				let ul = document.getElementsByTagName('ul')[0];
				let current = parseInt(ul.dataset.current, 10);
				let li = document.getElementsByTagName('li')[current];
				let new_li = li.cloneNode(true);
				ul.appendChild(new_li);
				ul.dataset.current = current + 1;
			}
		});
	});
}

export default InfiniteLoopImg;
