import { Icon } from '../icon/Icon'
import s from './titleSection.module.css'

interface TitleSectionProps {
	children: string
	variant?: 'primary' | 'secondary' | null
}

export const TitleSection: React.FC<TitleSectionProps> = ({
	variant = 'primary',
	children,
	...props
}) => {
	return (
		<h2
			className={`${s.titleSection} ${variant ? s[variant] : s.primary}`}
			{...props}
		>
			<Icon
				name='BadgeIcon'
				className={`${s.titleIcon} ${
					variant ? s[`titleIcon--${variant}`] : s[`titleIcon--primary`]
				}`}
			/>
			{children}
		</h2>
	)
}
