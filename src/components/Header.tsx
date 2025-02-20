'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ILink } from '@/interfaces';
import Button from '@/components/UI/Button';
interface Props {
	logo: string;
	links: ILink[];
}

function Header({ links, logo }: Props) {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY >= 1) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const renderLinks = () => {
		return links.map((item) => (
			<li key={crypto.randomUUID()}>
				<Link
					href={item.href}
					className='hover:underline hover:underline-offset-2 hover:text-primary transition-all duration-100'>
					{item.label}
				</Link>
			</li>
		));
	};

	return (
		<header
			className={`sticky top-0 z-20 bg-white transition-all duration-75 delay-300 ${
				isScrolled ? 'min-h-14 bg-white/95 shadow-md shadow-black' : 'min-h-80'
			}}`}
			id='#home'>
			<div className='max-container'>
				<div
					className={`flex justify-between items-center transition-all duration-75 px-3 lg:px-1 ${
						isScrolled ? 'py-2' : 'py-6'
					}`}>
					<Image
						src={`${logo}`}
						alt='Logo'
						width={isScrolled ? 100 : 150}
						height={isScrolled ? 60 : 100}
						quality={80}
						className='transition-all duration-300'
					/>

					<nav className='flex items-center gap-x-5'>
						<ul className='flex items-center gap-x-4 lg:gap-x-6'>{renderLinks()}</ul>
						<Button text='Contac Us' type='button' className='ps-2 pe-4' />
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
