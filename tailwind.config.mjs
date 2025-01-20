/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Glacial Indifference', 'sans-serif'],
			},
			screens: {
				'mobile-landscape': { raw: 'only screen and (max-width: 1024px) and (orientation: landscape)' },
				'3xl': '1729px'
			}
		},
		colors: {
			'peach': '#FFB777',
			'forest': '#2D4F3C'
		}
	},
	plugins: [],
}

