import styles from './hero.module.css'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>Frontend Developer</h1>
					<p className={styles.description}>
						Создаю современные веб-приложения с использованием React, Next.js и
						TypeScript. Увлекаюсь разработкой полного цикла и автоматизацией
						процессов.
					</p>
					<div className={styles.buttons}>
						<a href='#projects' className={styles.primaryButton}>
							Смотреть проекты
						</a>
						<a href='#contact' className={styles.secondaryButton}>
							Связаться со мной
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
