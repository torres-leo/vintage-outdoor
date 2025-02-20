import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { MdOutlineEmail } from 'react-icons/md';

import { HomeData } from '@/data/home';
import Button from './UI/Button';

function Footer() {
	const checkSocial = (social: string) => {
		switch (social) {
			case 'facebook':
				return <FaFacebook className='text-2xl text-primary hover:animate-bounce' />;
			case 'twitter':
				return <FaTwitter className='text-2xl text-white bg-primary rounded-full p-1 hover:animate-bounce' />;
			case 'whatsapp':
				return <FaWhatsapp className='text-2xl text-white bg-primary rounded-full p-1 hover:animate-bounce' />;
			case 'linkedin':
				return <FaLinkedinIn className='text-2xl text-white bg-primary rounded-full p-1 hover:animate-bounce' />;
		}
	};

	const renderSocials = HomeData.socials.map((item) => (
		<Link key={crypto.randomUUID()} href={item.href}>
			{checkSocial(item.icon)}
		</Link>
	));

	const renderOurCompanyLinks = HomeData.links.slice(0, 5).map((item) => (
		<Link
			className='hover:underline hover:underline-offset-2 hover:text-primary transition-all duration-100'
			key={crypto.randomUUID()}
			href={item.href}>
			{item.label}
		</Link>
	));

	const renderSupportLinks = HomeData.links.slice(5).map((item) => (
		<Link
			className='hover:underline hover:underline-offset-2 hover:text-primary transition-all duration-100'
			key={crypto.randomUUID()}
			href={item.href}>
			{item.label}
		</Link>
	));

	return (
		<footer
			className='w-full bg-no-repeat bg-cover relative h-[600px]'
			style={{ backgroundImage: `url(${HomeData.footer.bgImage})` }}>
			<div className='absolute inset-0 bg-white bg-opacity-70'>
				<div className='max-w-[1024px] mx-auto flex gap-x-10 w-full justify-center items-start pt-48 px-5'>
					<div className='flex flex-col items-center gap-y-6 w-52 mr-10'>
						<Image src={HomeData.logo} alt='Logo' width={150} height={100} quality={80} />
						<p className='text-xs text-justify'>{HomeData.footer.text}</p>
						<nav className='flex items-center gap-x-2'>{renderSocials}</nav>
					</div>

					<div className='flex-1'>
						<h6 className='font-semibold mb-3 text-lg'>Our Company</h6>

						<nav className='flex flex-col gap-y-3'>{renderOurCompanyLinks}</nav>
					</div>

					<div className='flex-1'>
						<h6 className='font-semibold mb-3 text-lg'>Support</h6>
						<nav className='flex flex-col gap-y-3'>
							{renderSupportLinks}
							<Link
								className='hover:underline hover:underline-offset-2 hover:text-primary transition-all duration-100'
								href='/contact'>
								Contact Us
							</Link>
						</nav>
					</div>

					<div className='flex-1'>
						<h6 className='font-semibold mb-3 text-lg'>Join Our Newsletter</h6>

						<div className='flex rounded-full border border-black px-0.5 mb-10'>
							<input
								type='text'
								className='bg-transparent py-1 ps-3 ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-800'
								placeholder='Enter your email'
							/>
							<Button text='Subscribe' type='button' className='border border-black px-3' />
						</div>

						<ul className='space-y-4'>
							<li className='flex items-center gap-x-3'>
								<MdPhone className='bg-primary text-2xl text-white p-1 rounded-full' />
								<p className='text-lg font-medium'>{HomeData.phone}</p>
							</li>
							<li className='flex items-center gap-x-3'>
								<MdLocationOn className='bg-primary text-2xl text-white p-1 rounded-full' />
								<p className='text-lg font-medium w-[25ch]'>{HomeData.address}</p>
							</li>
							<li className='flex items-center gap-x-3'>
								<MdOutlineEmail className='bg-primary text-2xl text-white p-1 rounded-full' />
								<p className='text-lg font-medium'>{HomeData.email}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
