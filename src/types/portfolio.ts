export interface Project {
	id: number
	title: string
	description: string
	technologies: string[]
	githubUrl?: string
	liveUrl?: string
	image?: string
}

export interface Skill {
	name: string
	category: 'frontend' | 'backend' | 'tools'
	level: number
}

export interface ContactInfo {
	email: string
	telegram?: string
	github: string
}
