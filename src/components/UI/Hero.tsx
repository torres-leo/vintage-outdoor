import Image from 'next/image';

interface Props {
	image: string;
	children: React.ReactNode;
}

function Hero({ image, children }: Props) {
	return (
		<section className='max-container'>
			<div className='relative h-[600px] rounded-3xl mb-6'>
				<Image src={image} fill alt='Hero Image' className='rounded-[60px]' />

				{children}
			</div>
		</section>
	);
}

export default Hero;
