import { HomeData } from '@/data/home';
import ServiceCard from '../cards/ServiceCard';
import Title from '../UI/Title';

function Services() {
	const renderCards = () => {
		return HomeData.Services.cards.map((item) => (
			<li key={crypto.randomUUID()}>
				<ServiceCard {...item} />
			</li>
		));
	};

	return (
		<section className='bg-gray-100 pt-20 pb-32' id='services'>
			<div className='max-container px-2 lg:px-0'>
				<Title className='text-5xl font-medium font-newsreader text-center mb-8' title={HomeData.Services.title} />
				<p className='w-80 mx-auto mt-4 text-center leading-5 mb-12'>{HomeData.Services.subtitle}</p>

				<ul className='flex justify-between'>{renderCards()}</ul>
			</div>
		</section>
	);
}

export default Services;
