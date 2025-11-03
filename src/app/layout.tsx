import '@/assets/styles/global.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
	title: 'Евгений Мясников - Frontend Developer',
	description: 'Персональное портфолио фронтенд разработчика',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru' className={`${inter.variable} ${robotoMono.variable}`}>
			<body>{children}</body>
		</html>
	)
}
