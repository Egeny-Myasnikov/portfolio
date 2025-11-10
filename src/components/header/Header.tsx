'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Icon, IconName } from '../icon/Icon'
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'
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

	const [isOpenBurger, setIsOpenBurger] = useState(false)

	const showBurger = () => {
		setIsOpenBurger(!isOpenBurger)
	}

	return (
		<header className={`${s.header}`}>
			<div className={` container`}>
				<div className={`${s.wrapper}`}>
					<Link href='/' title='Главная' className={`${s.logo}`}>
						<Icon name={'LogoIcon'} width={50} color='var(--color-secondary)' />
					</Link>

					<div className={`${s.centerSide} ${isOpenBurger ? s.show : ''}`}>
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
								<Link
									className={`${s.link}`}
									key={href}
									href={href}
									target='_blank'
									title={title}
								>
									<Icon name={nameIcon} />
								</Link>
							))}
						</div>
					</div>
					<button
						onClick={showBurger}
						aria-label='burger'
						className={`${s.burger}`}
					></button>

					<div className={`${s.headerSwitcherTheme}`}>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	)
}
