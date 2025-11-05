'use client'

import { skills } from '@/data/portfolio-data'
import styles from './skills.module.css'

export default function Skills() {
	const categories = {
		frontend: 'Frontend',
		backend: 'Backend',
		tools: 'Инструменты',
	}

	return (
		<section id='skills' className={styles.skills}>
			<div className={styles.container}>
				<h2 className={styles.title}>Навыки</h2>

				<div className={styles.grid}>
					{Object.entries(categories).map(([key, categoryTitle]) => (
						<div key={key} className={styles.category}>
							<h3 className={styles.categoryTitle}>{categoryTitle}</h3>
							<div className={styles.skillsList}>
								{skills
									.filter(skill => skill.category === key)
									.map(skill => (
										<div key={skill.name} className={styles.skill}>
											<div className={styles.skillHeader}>
												<span className={styles.skillName}>{skill.name}</span>
												<span className={styles.skillLevel}>
													{skill.level}%
												</span>
											</div>
											<div className={styles.progressBar}>
												<div
													className={styles.progressFill}
													style={{ width: `${skill.level}%` }}
												/>
											</div>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
