// webpack.mix.js

let mix = require('laravel-mix');

mix
	.js('src/js/app.js', 'js')
	.sass('src/scss/app.scss', 'css')
	.setPublicPath('dist')
	.options({
		postCss: [require('tailwindcss')],
	})
	.browserSync({
		server: './',
		files: ['./**/*.html', './dist'],
	});
