import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { HomeData } from '@/data/home';
import Footer from '@/components/Footer';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const newsReader = Newsreader({
	variable: '--font-newsreader',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Vintage Outdoor',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${newsReader.variable} antialiased`}>
				<Header logo='/vintage-logo.png' links={HomeData.links} />

				<main>{children}</main>

				<Footer />
			</body>
		</html>
	);
}
