import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: '#C49326',
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				newsreader: ['var(--font-newsreader)'],
			},
		},
	},
	plugins: [],
};
export default config;
