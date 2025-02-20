import Image from 'next/image';
import { HomeData } from '@/data/home';
import Button from '../UI/Button';

function AboutUs() {
	return (
		<section className='py-10 max-container'>
			<div className='flex flex-col gap-y-7'>
				<div className='flex gap-x-9'>
					<picture className='relative w-[260px] h-[220px] bg-cover overflow-hidden rounded-3xl'>
						<Image
							src={HomeData.About.img1}
							className='rounded-3xl scale-[1.85]'
							alt='About Us image 1'
							fill
							quality={90}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</picture>

					<div className='flex-1'>
						<h3 className='text-5xl font-medium font-newsreader text-center mb-4'>{HomeData.About.title}</h3>
						<p className='w-[60ch] text-center mx-auto font-inter leading-5 mb-5'>{HomeData.About.subtitle}</p>
						<p className='py-4 px-7 bg-gray-50 rounded-2xl font-medium font-inter'>{HomeData.About.info.text1}</p>
					</div>
				</div>

				<div className='flex gap-x-9'>
					<picture className='relative w-[260px] h-[190px]'>
						<Image
							src={HomeData.About.img2}
							className='rounded-3xl'
							alt='About Us image 1'
							fill
							quality={90}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</picture>

					<div className='flex-1'>
						<p className='py-4 px-7 bg-gray-50 rounded-2xl font-medium font-inter mb-5'>{HomeData.About.info.text2}</p>

						<div className='ps-7'>
							<Button text='Read More' type='button' className='ps-3 pe-5' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
