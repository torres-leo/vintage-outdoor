import Image from 'next/image';

interface Props {
	img: string;
	title: string;
	text: string;
}

function BlogCard({ img, text, title }: Props) {
	return (
		<article className='min-w-[280px] max-w-[280px] w-full'>
			<div className='relative w-full h-[170px] z-10'>
				<Image
					src={img}
					fill
					alt={title}
					className='rounded-2xl'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			</div>

			<div className='relative bg-white -mt-10 z-20 block w-4/5 mx-auto p-6 shadow-button-cards rounded-2xl'>
				<h6 className='font-inter font-medium leading-[1.2] mb-3'>{title}</h6>
				<p className='mb-4'>{text}</p>

				<div className='flex justify-center'>
					<button className='bg-gray-100 rounded-3xl py-1.5 ps-5 pe-3 w-[130px] mx-auto shadow-button-cards'>
						Read More
					</button>
				</div>
			</div>
		</article>
	);
}

export default BlogCard;
