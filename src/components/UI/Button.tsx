'use client';

interface Props {
	text: string;
	type: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'secondary';
	className?: string;
}

function Button({ text, type = 'button', variant = 'primary', className }: Props) {
	const baseStyles = 'p-1 font-medium rounded-2xl transition duration-200 border-2 border-transparent';
	const variantStyles = {
		primary: 'bg-primary text-white hover:bg-primary/90 hover:border-primary',
		secondary: 'bg-white text-primary hover:bg-white/80 hover:border-white',
	};

	const handleClick = () => {
		console.log('Button clicked');
	};

	return (
		<button className={`${baseStyles} ${variantStyles[variant]} ${className}`} type={type} onClick={handleClick}>
			{text}
		</button>
	);
}

export default Button;
