import { HomeData } from '@/data/home';
import BlogCard from '../cards/BlogCard';
import Button from '../UI/Button';

function Blog() {
	const renderPosts = () => {
		return HomeData.Blog.cards.map((item) => (
			<li key={crypto.randomUUID()}>
				<BlogCard {...item} />
			</li>
		));
	};

	return (
		<section className='py-20 mb-16' id='blog'>
			<div className='max-container'>
				<h3 className='text-5xl text-center font-newsreader mb-5'>{HomeData.Blog.title}</h3>
				<p className='text-center max-w-[590px] w-full mx-auto mb-14'>{HomeData.Blog.text}</p>

				<ul className='flex gap-x-10 mb-20 w-full justify-between'>{renderPosts()}</ul>

				<div className='flex justify-center'>
					<Button text='Discover More' type='button' className='w-[200px]' />
				</div>
			</div>
		</section>
	);
}

export default Blog;
