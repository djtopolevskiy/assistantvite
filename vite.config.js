// import Inspect from 'vite-plugin-inspect'
import vitePugPlugin from 'vite-plugin-pug-transformer'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// export default {
// 	// plugins: [Inspect()],
// 	plugins: [vitePugPlugin()],
// }

export default defineConfig({
	base: '/assistantvite',
	plugins: [vitePugPlugin()],

	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				nested: resolve(__dirname, 'pages/question.html'),
			},
		},
	},
})
