/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,md,mdx,ts}'],
	theme: {
		extend: {
			fontFamily: {
        		// This maps 'font-heading' to Archivo
       			heading: ['Archivo', 'sans-serif'],
        			// This maps 'font-sans' to Inter
        		sans: ['Inter Variable', 'sans-serif'],
      		},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
