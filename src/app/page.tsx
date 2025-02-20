import { HomeData } from '@/data/home';
import AboutUs from '@/components/sections/AboutUs';
import Blog from '@/components/sections/Blog';
import Button from '@/components/UI/Button';
import ContactUs from '@/components/sections/ContactUs';
import Gallery from '@/components/sections/Gallery';
import Hero from '@/components/UI/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
	const heroTags = HomeData.HERO.tags.map((item) => (
		<span key={crypto.randomUUID()} className='after:content-["|"] after:mx-1 last:after:content-[""]'>
			{item}
		</span>
	));

	return (
		<>
			<Hero image={HomeData.HERO.image}>
				<div className='z-10 absolute top-14 left-8 w-2/4'>
					<h3 className='uppercase text-4xl font-semibold leading-[1.2] mb-3 font-newsreader'>{HomeData.HERO.title}</h3>
					<p className='text-[15px] mb-4'>{heroTags}</p>

					<div className='flex gap-x-3'>
						<Button text={HomeData.HERO.pbuton} type='button' className='capitalize py-1 ps-2 pe-3' />
						<Button text={HomeData.HERO.sbutton} type='button' variant='secondary' className='ps-3 pe-3 capitalize' />
					</div>
				</div>

				<div className='z-10 absolute bottom-0 bg-white pt-5 pb-5 ps-0 pe-6 right-0 w-60 rounded-tl-[35px]'>
					<p className='text-lg font-medium text-end'>{HomeData.HERO.text}</p>
				</div>
			</Hero>

			<AboutUs />
			<Services />
			<Gallery />
			<Testimonials />
			<Blog />
			<ContactUs />
		</>
	);
}
