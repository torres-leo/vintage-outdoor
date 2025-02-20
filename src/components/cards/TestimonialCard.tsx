import Image from 'next/image';
import { RiStarSFill } from 'react-icons/ri';
import { IoIosQuote } from 'react-icons/io';

interface Props {
	author: string;
	text: string;
	rating: number;
	img: string;
}

function TestimonialCard({ author, img, rating, text }: Props) {
	const renderStars = () =>
		Array.from({ length: rating }).map((_) => (
			<li key={crypto.randomUUID()}>
				<RiStarSFill className='text-primary text-xl' />
			</li>
		));

	return (
		<div className='max-w-[480px] w-full'>
			<div className='flex items-center gap-x-8'>
				<div className='bg-gray-100 rounded-2xl pt-10 pb-16 px-6 w-full shadow-button-cards relative'>
					<IoIosQuote className='absolute text-gray-300 text-5xl left-[42%] top-[50%] opacity-35' />
					<h6 className='text-3xl font-newsreader mb-2'>{author}</h6>
					<p className='text-xs font-medium max-w-[160px] w-full mb-9'>{text}</p>
					<ul className='flex gap-x-1'>{renderStars()}</ul>
				</div>

				<div className='relative w-[450px] h-[180px] -ml-36 overflow-hidden rounded-2xl'>
					<Image
						src={img}
						fill
						alt={author}
						className='rounded-2xl'
						quality={90}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
