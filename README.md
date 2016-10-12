# Web Boilerplate

A super simple bare bones web boilerplate for those quick tests!

## Clone

    $ git clone https://github.com/ScottWhittaker/web-boilerplate-scss

## Install Dependencies

    $ cd web-boilerplate-scss
    $ npm install

## Run the Application

    $ gulp

## Start coding

This is a simple as it gets, code away, your scss, html and javascript changes are automatically reflected in the browser(s).

## Browsers

Additional browsers can be added in `gulpfile.js` as follows...

    gulp.task('browserSync', function(){
        return browserSync({
            server: {
                baseDir: './app'
            },
            browser: ['google chrome canary', 'google chrome', 'firefox']
        });
    });

