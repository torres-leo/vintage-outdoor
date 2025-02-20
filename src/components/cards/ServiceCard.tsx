import Image from 'next/image';
import { MdDeck } from 'react-icons/md';
import { MdOutlineCardGiftcard } from 'react-icons/md';
import { RiFileSettingsLine } from 'react-icons/ri';

interface Props {
	img: string;
	title: string;
	text: string;
	icon: string;
}

function ServiceCard({ img, text, title, icon }: Props) {
	const getIcon = (icon: string) => {
		switch (icon) {
			case 'RiFileSettingsLine':
				return <RiFileSettingsLine className='text-4xl bg-primary text-white rounded-full p-1' />;
			case 'MdDeck':
				return <MdDeck className='text-4xl bg-primary text-white rounded-full p-1.5' />;
			case 'MdOutlineCardGiftcard':
				return <MdOutlineCardGiftcard className='text-4xl bg-primary text-white rounded-full p-1' />;
		}
	};

	return (
		<article className='max-w-[298px] w-full p-4 bg-white rounded-3xl shadow-2xl shadow-black/30'>
			<picture className='block w-full h-[200px] relative mb-5'>
				<Image
					src={img}
					fill
					alt={title}
					className='w-full h-full absolute rounded-t-2xl'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</picture>

			<div className='mb-5 h-44'>
				<h6 className='text-primary font-newsreader text-3xl w-[220px] mb-2 text-balance'>{title}</h6>
				<p className='font-inter text-[10px]'>{text}</p>
			</div>

			<button className='bg-gray-100 rounded-3xl py-1.5 ps-5 pe-3 flex w-[90%] shadow-button-cards items-center justify-between'>
				<span className='text-sm font-semibold text-gray-500'>Read More</span>
				{getIcon(icon)}
			</button>
		</article>
	);
}

export default ServiceCard;
