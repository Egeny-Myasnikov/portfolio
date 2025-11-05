import { Project, Skill, ContactInfo } from '@/types/portfolio'

export const projects: Project[] = [
	{
		id: 1,
		title: 'Аутентификация Full-Stack',
		description: 'Система аутентификации с Next.js, NestJS, PostgreSQL и Redis',
		technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
		githubUrl: 'https://github.com/Egeny-Myasnikov/auth-nestjs-server',
	},
	{
		id: 2,
		title: 'Портфолио сайт',
		description: 'Персональный сайт-портфолио с автоматическим деплоем',
		technologies: ['Next.js 15', 'TypeScript', 'Docker', 'GitHub Actions'],
		liveUrl: 'https://e-myasnikov.ru',
	},
]

export const skills: Skill[] = [
	// Frontend
	{ name: 'HTML/CSS', category: 'frontend', level: 90 },
	{ name: 'JavaScript', category: 'frontend', level: 85 },
	{ name: 'TypeScript', category: 'frontend', level: 80 },
	{ name: 'React', category: 'frontend', level: 85 },
	{ name: 'Next.js', category: 'frontend', level: 80 },

	// Backend
	{ name: 'Node.js', category: 'backend', level: 75 },
	{ name: 'NestJS', category: 'backend', level: 70 },
	{ name: 'PostgreSQL', category: 'backend', level: 70 },

	// Tools
	{ name: 'Git', category: 'tools', level: 85 },
	{ name: 'Docker', category: 'tools', level: 75 },
	{ name: 'Figma', category: 'tools', level: 70 },
]

export const contactInfo: ContactInfo = {
	email: 'fl-jenya@yandex.ru',
	telegram: '@fljenya',
	github: 'Egeny-Myasnikov',
}
