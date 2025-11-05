import Link from 'next/link'
import { Icon, IconName } from '../icon/Icon'
import s from './header.module.css'

interface ISocBarData {
	href: string
	title: string
	nameIcon: IconName
}

export default function Header() {
	const socBarData: ISocBarData[] = [
		{
			href: 'https://github.com/Egeny-Myasnikov',
			title: 'github',
			nameIcon: 'GithubIcon',
		},
		{
			href: 'https://t.me/fljenya',
			title: 'telegram',
			nameIcon: 'TelegramIcon',
		},
	]
	return (
		<header className={`${s.header}`}>
			<div className={`${s.headerContainer} container`}>
				<Link href='/' title='Главная' className={`${s.logo}`}>
					<Icon name={'LogoIcon'} width={50} />
				</Link>
				<nav className={`${s.nav}`}>
					<a href='#skills' className={`${s.link}`}>
						Навыки
					</a>
					<a href='#projects' className={`${s.link}`}>
						Проекты
					</a>
					<a href='#contact' className={`${s.link}`}>
						Контакты
					</a>
				</nav>
				<div className={`${s.socBar}`}>
					{socBarData.map(({ href, title, nameIcon }) => (
						<Link key={href} href={href} target='_blank' title={title}>
							<Icon name={nameIcon} />
						</Link>
					))}
				</div>
			</div>
		</header>
	)
}
