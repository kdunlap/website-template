var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    concat = require( 'gulp-concat'),
    rename  = require( 'gulp-rename'),
    cssmin  = require( 'gulp-cssmin'),
    minify = require( 'gulp-minify' );


var paths = {
    'default':              './assets/',
    'jquery':               './bower_modules/jquery/',
    'jqueryValidation':     './bower_modules/jquery-validation/',
    'normalize':            './bower_modules/normalize.css/'
};

gulp.task( 'default', [ 'sass', 'js' ] );
gulp.task( 'production', [ 'css-min', 'js-min' ] );

gulp.task( 'sass', function(cb) {

    return gulp.src([
            paths.normalize + 'normalize.css',
            paths.default + 'scss/main.scss'
        ])
        .pipe( sass() )
        .pipe( concat( 'all.css' ) )
        .pipe( gulp.dest( paths.default + 'css' ) );
});

gulp.task( 'css-min', [ 'sass' ], function(cb) {

    return gulp.src( [ paths.default + 'css/all.css' ] )
        .pipe( cssmin() )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( gulp.dest( paths.default + 'css' ) );
});

gulp.task( 'js', function(cb) {

    return gulp.src([
            paths.jquery           + 'dist/jquery.min.js',
            paths.jqueryValidation + 'dist/jquery.validate.min.js',
            paths.default          + 'js/scripts.js'
        ])
        .pipe( concat( 'all.js' ) )
        .pipe( gulp.dest( paths.default + 'js' ) );
});

gulp.task( 'js-min', [ 'js' ], function(cb) {

    return gulp.src( [ paths.default + 'js/all.js' ] )
        .pipe( minify() )
        .pipe( gulp.dest( paths.default + 'js' ) );
});

gulp.task('watch', function() {
    gulp.watch( [ paths.default + 'scss/**/*.scss' ], [ 'default' ] );
});

