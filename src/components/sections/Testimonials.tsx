import React from 'react';
import Title from '../UI/Title';
import { HomeData } from '@/data/home';
import Button from '../UI/Button';
import TestimonialCard from '../cards/TestimonialCard';

function Testimonials() {
	const renderTestimonials = () => {
		return HomeData.Testimonials.cards.map((item) => (
			<li key={crypto.randomUUID()}>
				<TestimonialCard {...item} />
			</li>
		));
	};

	return (
		<section>
			<div className='max-container'>
				<Title title={HomeData.Testimonials.title} className='text-5xl text-center mb-9' />

				<p className='max-w-[600px] mx-auto w-full text-center mb-10'>{HomeData.Testimonials.text}</p>

				<ul className='flex gap-x-12 mb-16'>{renderTestimonials()}</ul>

				<div className='flex justify-center'>
					<Button text='Explore More Testimonials' type='button' className='w-[250px]' />
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
