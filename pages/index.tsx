import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Header from '@components/Header';
import Navigation from '@components/Navigation';

import { getPostList } from 'utils/util';

type PostList = string[]

function Home ({ posts }: InferGetStaticPropsType <typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
			</Head>

			<main>
				<Navigation />
				<Header />

				{posts.length > 0 && (
					<ul>
						{posts.map((post) => (
							<li key={post}>
								<Link href={`post/${post}`}>
									<a>
										{post.replace(/-/g, ' ')}
									</a>
								</Link>
							</li>
						))}
					</ul>
				)}
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	const posts: PostList = getPostList();

	return {
		props: {
			posts
		}
	};
};	

export default Home;
