import { SVGProps } from 'react'

export interface LogoIconProps extends SVGProps<SVGSVGElement> {
	height?: number | string
	width?: number | string
}

export const LogoIcon = ({
	height = 24,
	width = 17,
	...props
}: LogoIconProps) => {
	const gradient_color_1 = 'var(--color-main-4)'
	const gradient_color_2 = 'var(--color-main-5)'
	return (
		<svg
			width={width}
			height={height}
			fill={'none'}
			viewBox='0 0 24 17'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			{...props}
		>
			<path
				d='M12.0139 3.69833L13.5567 4.56522V6.299L12.0139 7.16589L10.4711 6.299V4.56522L12.0139 3.69833Z'
				fill='url(#paint0_linear_2027_11)'
			/>
			<path
				d='M10.4273 1.04348L11.9701 1.91037V3.64415L10.4273 4.51104L8.88452 3.64415V1.91037L10.4273 1.04348Z'
				fill='url(#paint1_linear_2027_11)'
			/>
			<path
				d='M10.4273 11.6629L11.9701 12.5298V14.2635L10.4273 15.1304L8.88452 14.2635V12.5298L10.4273 11.6629Z'
				fill='url(#paint2_linear_2027_11)'
			/>
			<path
				d='M13.5727 11.6629L15.1155 12.5298V14.2635L13.5727 15.1304L12.0299 14.2635V12.5298L13.5727 11.6629Z'
				fill='url(#paint3_linear_2027_11)'
			/>
			<path
				d='M13.5727 1.04348L15.1155 1.91037V3.64415L13.5727 4.51104L12.0299 3.64415V1.91037L13.5727 1.04348Z'
				fill='url(#paint4_linear_2027_11)'
			/>
			<path
				d='M13.5727 6.35318L15.1155 7.22007V8.95385L13.5727 9.82074L12.0299 8.95385V7.22007L13.5727 6.35318Z'
				fill='url(#paint5_linear_2027_11)'
			/>
			<path
				d='M16.7181 6.35318L18.2609 7.22007V8.95385L16.7181 9.82074L15.1753 8.95385V7.22007L16.7181 6.35318Z'
				fill='url(#paint6_linear_2027_11)'
			/>
			<path
				d='M7.28192 6.35318L8.82471 7.22007V8.95385L7.28192 9.82074L5.73913 8.95385V7.22007L7.28192 6.35318Z'
				fill='url(#paint7_linear_2027_11)'
			/>
			<path
				d='M15.1593 9.00803L16.7021 9.87492V11.6087L15.1593 12.4756L13.6165 11.6087V9.87492L15.1593 9.00803Z'
				fill='url(#paint8_linear_2027_11)'
			/>
			<path
				d='M12.0139 9.00803L13.5567 9.87492V11.6087L12.0139 12.4756L10.4711 11.6087V9.87492L12.0139 9.00803Z'
				fill='url(#paint9_linear_2027_11)'
			/>
			<path
				d='M10.4273 6.35318L11.9701 7.22007V8.95385L10.4273 9.82074L8.88452 8.95385V7.22007L10.4273 6.35318Z'
				fill='url(#paint10_linear_2027_11)'
			/>
			<path
				d='M8.86853 3.69833L10.4113 4.56522V6.299L8.86853 7.16589L7.32574 6.299V4.56522L8.86853 3.69833Z'
				fill='url(#paint11_linear_2027_11)'
			/>
			<path
				d='M15.1593 3.69833L16.7021 4.56522V6.299L15.1593 7.16589L13.6165 6.299V4.56522L15.1593 3.69833Z'
				fill='url(#paint12_linear_2027_11)'
			/>
			<path
				d='M8.86853 9.00803L10.4113 9.87492V11.6087L8.86853 12.4756L7.32574 11.6087V9.87492L8.86853 9.00803Z'
				fill='url(#paint13_linear_2027_11)'
			/>
			<path
				d='M4.71176 16.6957C3.61353 16.6957 2.781 16.4162 2.21417 15.8573C1.64734 15.3103 1.36393 14.5255 1.36393 13.5028V10.2742C1.36393 9.98885 1.29308 9.78075 1.15137 9.64994C1.00966 9.50725 0.820719 9.4359 0.584541 9.4359H0V7.25975H0.584541C0.820719 7.25975 1.00966 7.18841 1.15137 7.04571C1.29308 6.90301 1.36393 6.69491 1.36393 6.4214V3.19287C1.36393 2.15831 1.64734 1.36752 2.21417 0.820513C2.781 0.273504 3.61353 0 4.71176 0H5.73913V2.17614H5.42029C4.99517 2.17614 4.67042 2.28911 4.44605 2.51505C4.23349 2.74099 4.12721 3.068 4.12721 3.4961V6.35006C4.12721 6.87328 4.05636 7.28354 3.91465 7.58083C3.77295 7.87811 3.54858 8.09216 3.24155 8.22297C2.94632 8.35377 2.56253 8.4489 2.09018 8.50836V8.18729C2.56253 8.23486 2.94632 8.32999 3.24155 8.47269C3.54858 8.60349 3.77295 8.81754 3.91465 9.11483C4.05636 9.41211 4.12721 9.82237 4.12721 10.3456V13.1996C4.12721 13.6276 4.23349 13.9547 4.44605 14.1806C4.67042 14.4065 4.99517 14.5195 5.42029 14.5195H5.73913V16.6957H4.71176Z'
				fill='url(#paint14_linear_2027_11)'
			/>
			<path
				d='M19.2882 16.6957C20.3865 16.6957 21.219 16.4162 21.7858 15.8573C22.3527 15.3103 22.6361 14.5255 22.6361 13.5028V10.2742C22.6361 9.98885 22.7069 9.78075 22.8486 9.64994C22.9903 9.50725 23.1793 9.4359 23.4155 9.4359H24V7.25975H23.4155C23.1793 7.25975 22.9903 7.18841 22.8486 7.04571C22.7069 6.90301 22.6361 6.69491 22.6361 6.4214V3.19287C22.6361 2.15831 22.3527 1.36752 21.7858 0.820513C21.219 0.273504 20.3865 0 19.2882 0H18.2609V2.17614H18.5797C19.0048 2.17614 19.3296 2.28911 19.5539 2.51505C19.7665 2.74099 19.8728 3.068 19.8728 3.4961V6.35006C19.8728 6.87328 19.9436 7.28354 20.0853 7.58083C20.2271 7.87811 20.4514 8.09216 20.7585 8.22297C21.0537 8.35377 21.4375 8.4489 21.9098 8.50836V8.18729C21.4375 8.23486 21.0537 8.32999 20.7585 8.47269C20.4514 8.60349 20.2271 8.81754 20.0853 9.11483C19.9436 9.41211 19.8728 9.82237 19.8728 10.3456V13.1996C19.8728 13.6276 19.7665 13.9547 19.5539 14.1806C19.3296 14.4065 19.0048 14.5195 18.5797 14.5195H18.2609V16.6957H19.2882Z'
				fill='url(#paint15_linear_2027_11)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint1_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint2_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint3_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint4_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint5_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint6_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint7_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint8_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint9_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint10_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint11_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint12_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint13_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint14_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
				<linearGradient
					id='paint15_linear_2027_11'
					x1='12'
					y1='0'
					x2='12'
					y2='16.6957'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor={gradient_color_1} />
					<stop offset='1' stopColor={gradient_color_2} />
				</linearGradient>
			</defs>
		</svg>
	)
}
