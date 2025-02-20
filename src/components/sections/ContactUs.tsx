import Image from 'next/image';
import { HomeData } from '@/data/home';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import ContactUsForm from '../ContactUsForm';

function ContactUs() {
	return (
		<section>
			<div className='relative w-full h-[280px] max-container mb-16'>
				<Image
					src={HomeData.HERO.image}
					fill
					alt='Contact us image'
					className='rounded-[30px] bg-no-repeat object-cover'
				/>
				<div className='absolute inset-0 bg-black bg-opacity-50 rounded-[30px]'>
					<div className='flex flex-col items-center justify-center h-full'>
						<h5 className='text-white text-5xl font-medium font-newsreader'>Contact Us</h5>
					</div>
				</div>
			</div>

			<div className='bg-gray-100 py-20 px-2 lg:px-0'>
				<div className='max-container'>
					<div className='flex gap-x-4 justify-between'>
						<div className='max-w-[300px] w-full'>
							<h3 className='text-5xl font-newsreader w-[260px] leading-[1.2] mb-8'>{HomeData.ContactUs.title}</h3>
							<p className='font-medium mb-4'>{HomeData.ContactUs.text}</p>
							<p className='font-medium mb-8'>{HomeData.ContactUs.secondaryText}</p>

							<ul className='space-y-4'>
								<li className='flex items-center gap-x-3'>
									<MdPhone className='bg-primary text-3xl text-white p-1 rounded-full' />
									<p className='text-2xl font-medium'>
										<span className='block font-semibold text-xs -mb-1'>Phone Number</span>
										{HomeData.phone}
									</p>
								</li>
								<li className='flex items-center gap-x-3'>
									<MdLocationOn className='bg-primary text-3xl text-white p-1 rounded-full' />
									<p className='text-xl font-medium w-[25ch] leading-6'>
										<span className='block font-semibold text-xs -mb-1'>Address</span>
										{HomeData.address}
									</p>
								</li>
							</ul>
						</div>

						<ContactUsForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUs;
