'use strict';

// Gulp Plugins
var gulp 		= require('gulp'),
    spritesmith = require('gulp.spritesmith');


	//Sprite
	gulp.task('sprite', function () {
		var spriteData = gulp.src('assets/*.png').pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css',
			cssFormat: 'css',
			algorithm: 'binary-tree',
			cssTemplate: 'sprite.mustache'
		}));
		spriteData.img.pipe(gulp.dest('build/'));
		spriteData.css.pipe(gulp.dest('build/'));
	});

	gulp.task('default',	['sprite']);