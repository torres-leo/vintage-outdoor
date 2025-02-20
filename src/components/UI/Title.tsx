interface Props {
	title: string;
	className?: string;
}

function Title({ title, className }: Props) {
	return (
		<h3
			className={`relative font-newsreader ${
				className ?? ''
			} after:content-[""] after:absolute after:-bottom-2 after:left-2/4 after:-translate-x-1/2 after:w-[160px] after:h-0.5 after:bg-primary`}>
			{title}
		</h3>
	);
}

export default Title;
