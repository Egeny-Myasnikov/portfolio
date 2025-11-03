import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
