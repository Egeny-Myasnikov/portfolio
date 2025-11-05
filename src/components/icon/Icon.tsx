import { ComponentType, SVGProps } from 'react'
import { GithubIcon } from './icons/GithubIcon'
import { LogoIcon } from './icons/LogoIcon'
import { BadgeIcon } from './icons/BadgeIcon'
import { TelegramIcon } from './icons/TelegramIcon'
import { ArrowRightIcon } from './icons/ArrowRightIcon'

// Тип для доступных иконок
export type IconName =
	| 'LogoIcon'
	| 'GithubIcon'
	| 'TelegramIcon'
	| 'BadgeIcon'
	| 'ArrowRightIcon'

// Тип для пропсов иконки
export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconName
	width?: number
	height?: number
	color?: string
}

// Тип для компонента иконки
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

// Объект с иконками
const icons: Record<IconName, IconComponent> = {
	LogoIcon,
	GithubIcon,
	TelegramIcon,
	BadgeIcon,
	ArrowRightIcon,
}

export const Icon = ({
	name,
	width = 24,
	height = 24,
	color = 'currentColor',
	...props
}: IconProps) => {
	const Component = icons[name]

	if (!Component) {
		console.warn(`Icon "${name}" not found`)
		return null
	}

	return <Component width={width} height={height} color={color} {...props} />
}
