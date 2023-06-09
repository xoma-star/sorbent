/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	/** @type {import('tailwindcss').Config} */
		theme: {
			extend: {
				animation: {
					'text-shimmer': 'text-shimmer 15s ease infinite',
					'text-in': 'text-in 700ms cubic-bezier(0.36,0.66,0.04,1) forwards',
					'text-out': 'text-out 700ms cubic-bezier(0.36,0.66,0.04,1) forwards'
				},
				keyframes: {
					'text-shimmer': {
						'0%, 100%': {
							'background-size':'200% 200%',
							'background-position': 'left center'
						},
						'50%': {
							'background-size':'200% 200%',
							'background-position': 'right center'
						}
					},
					'text-in': {
						'0%': {
							'transform': 'translateY(-20px)',
							'opacity': 0
						},
						'100%': {
							'transform': 'translateY(0)',
							'opacity': 1
						}
					},
					'text-out': {
						'0%': {
							'transform': 'translateY(0)',
							'opacity': 1
						},
						'100%': {
							'transform': 'translateY(20px)',
							'opacity': 0
						}
					}
				}
			},
	},
	plugins: [],
}
