import { projects } from '@/data/portfolio-data'
import styles from './projects.module.css'

export default function Projects() {
	return (
		<section id='projects' className={styles.projects}>
			<div className={styles.container}>
				<h2 className={styles.title}>Проекты</h2>

				<div className={styles.grid}>
					{projects.map(project => (
						<div key={project.id} className={styles.project}>
							<div className={styles.content}>
								<h3 className={styles.projectTitle}>{project.title}</h3>
								<p className={styles.description}>{project.description}</p>

								<div className={styles.technologies}>
									{project.technologies.map(tech => (
										<span key={tech} className={styles.tech}>
											{tech}
										</span>
									))}
								</div>

								<div className={styles.links}>
									{project.githubUrl && (
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className={styles.link}
										>
											GitHub
										</a>
									)}
									{project.liveUrl && (
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className={styles.linkPrimary}
										>
											Live Demo
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
