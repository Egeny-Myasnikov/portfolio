import { contactInfo } from '@/data/portfolio-data'
import styles from './contact.module.css'

export default function Contact() {
	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.container}>
				<h2 className={styles.title}>Связаться со мной</h2>

				<div className={styles.content}>
					<div className={styles.info}>
						<div className={styles.contactItem}>
							<label className={styles.label}>Email</label>
							<a href={`mailto:${contactInfo.email}`} className={styles.link}>
								{contactInfo.email}
							</a>
						</div>

						<div className={styles.contactItem}>
							<label className={styles.label}>GitHub</label>
							<a
								href={`https://github.com/${contactInfo.github}`}
								target='_blank'
								rel='noopener noreferrer'
								className={styles.link}
							>
								{contactInfo.github}
							</a>
						</div>

						{contactInfo.telegram && (
							<div className={styles.contactItem}>
								<label className={styles.label}>Telegram</label>
								<a
									href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
									target='_blank'
									rel='noopener noreferrer'
									className={styles.link}
								>
									{contactInfo.telegram}
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
