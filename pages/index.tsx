import Head from 'next/head';

import Header from '@components/Header';
import Navigation from '@components/Navigation';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>

			<main>
				<Navigation />
				<Header />
			</main>
		</>
	);
}
