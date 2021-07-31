import { ReactNode } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './navigation.module.css';

const links = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'About',
		path: '/about'
	}
];

type NavAnchor = {
  path: string,
  children: ReactNode
}

function NavAnchor({ path, children }: NavAnchor) {
	return (
		<Link href={path}>
			<a> {children} </a>
		</Link>
	);
}

export default function Navigation() {
	const { pathname } = useRouter(); 

	return (
		<nav>
			<ul className={styles.list}>
				{links.map(({ name, path }) => (
					<li key={path}>
						{path === pathname 
							? <span>{name}</span> 
							: <span className={styles.navAnchor}> <NavAnchor path={path}>{name}</NavAnchor> </span>
						}
					</li>
				))}
			</ul>
		</nav>
	);
}