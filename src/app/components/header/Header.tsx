import styles from './header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<div className={styles.logo}>Евгений Мясников</div>
					<div className={styles.links}>
						<a href='#skills' className={styles.link}>
							Навыки
						</a>
						<a href='#projects' className={styles.link}>
							Проекты
						</a>
						<a href='#contact' className={styles.link}>
							Контакты
						</a>
					</div>
				</nav>
			</div>
		</header>
	)
}
