/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({theme}) => ({
				neutral: {
					css: {
						'--tw-prose-body': theme('colors.neutral[900]')
					}
				}
			})
		},
	},
	plugins: [typography],
}
