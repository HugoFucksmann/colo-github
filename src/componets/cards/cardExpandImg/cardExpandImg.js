const CardExpandImg = () => {
	return (
		<>
			<section className='cards-wrapper'>
				<div className='card-grid-space'>
					<div className='num'>01</div>
					<span
						className='card'
						href='https://codetheweb.blog/2017/10/06/html-syntax/'
						//style='--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)'
					>
						<div>
							<h1>HTML Syntax</h1>
							<p>
								The syntax of a language is how it works. How to
								actually write it. Learn HTML syntax…
							</p>
							<div className='date'>6 Oct 2017</div>
							<div className='tags'>
								<div className='tag'>HTML</div>
							</div>
						</div>
					</span>
				</div>
				<div className='card-grid-space'>
					<div className='num'>02</div>
					<span
						className='card'
						href='https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/'
						//style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')"
					>
						<div>
							<h1>Basic types of HTML tags</h1>
							<p>Learn about some of the most common HTML tags…</p>
							<div className='date'>9 Oct 2017</div>
							<div className='tags'>
								<div className='tag'>HTML</div>
							</div>
						</div>
					</span>
				</div>
				<div className='card-grid-space'>
					<div className='num'>03</div>
					<span
						className='card'
						href='https://codetheweb.blog/2017/10/14/links-images-about-file-paths/'
						//style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')"
					>
						<div>
							<h1>Links, images and about file paths</h1>
							<p>
								Learn how to use links and images along with file
								paths…
							</p>
							<div className='date'>14 Oct 2017</div>
							<div className='tags'>
								<div className='tag'>HTML</div>
							</div>
						</div>
					</span>
				</div>
			</section>
		</>
	);
};

export default CardExpandImg;
