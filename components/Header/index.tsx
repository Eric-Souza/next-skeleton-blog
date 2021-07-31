import styles from './header.module.css';

export default function Header() {
	return (
		<header className={styles.container}>
			<h1 className={styles.title}>
        Next tutorial website
			</h1>
		</header>
	);
}