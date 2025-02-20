import Image from 'next/image';

import { HomeData } from '@/data/home';
import Title from '../UI/Title';

function Gallery() {
	const [img1, img2, img3, img4, img5] = HomeData.Gallery.images;

	return (
		<section className='py-20 px-2 lg:px-0 mb-14' id='gallery'>
			<div className='max-container'>
				<div className='flex gap-x-6 items-center'>
					<div className='w-3/5'>
						<Title title={HomeData.Gallery.title} className='text-5xl w-[250px] mb-8' />

						<p className='text-sm font-medium'>{HomeData.Gallery.text}</p>
					</div>

					<div className='w-full'>
						<div className='grid grid-cols-1 md:grid-cols-9 gap-4'>
							<div className='md:col-span-3 aspect-square relative group overflow-hidden rounded-2xl'>
								<Image
									src={img1}
									alt='Modern house with pool at night'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-300 group-hover:scale-110'
								/>
							</div>
							<div className='md:col-span-3 aspect-square relative group overflow-hidden rounded-2xl'>
								<Image
									src={img2}
									alt='Infinity pool at sunset'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-300 group-hover:scale-110'
								/>
							</div>
							<div className='md:col-span-3 aspect-square relative group overflow-hidden rounded-2xl'>
								<Image
									src={img3}
									alt='Aerial view of garden'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-300 group-hover:scale-110'
								/>
							</div>

							<div className='md:col-span-4 aspect-[5/3] relative group overflow-hidden rounded-2xl'>
								<Image
									src={img4}
									alt='People looking at solar panels'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-300 group-hover:scale-110'
								/>
							</div>
							<div className='md:col-span-5 aspect-auto relative group overflow-hidden rounded-2xl'>
								<Image
									src={img5}
									alt='Swimming pool with mountain view'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover transition-transform duration-300 group-hover:scale-110'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
