const gulp = require('gulp')
const { parallel } = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-imagemin')
const stripeJs = require('gulp-strip-comments')
const stripeCss = require('gulp-strip-css-comments')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tarefasCSS(callback) {

   return  gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/owl/css/owl.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
    ])
        .pipe(stripeCss())          // remove comentarios
        .pipe(concat('styles.css'))  // mescla arquivos
        .pipe(cssmin())             // minifica css
        .pipe(rename({ suffix: '.min'})) // styles.min.css
        .pipe(gulp.dest('./dist/css')) // cria arquivos em novo diretorio

        return callback()
}

function tarefasJS(callback){

         gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ])
    //.pipe(babel({
    //    comments: false,
    //    presets: ['@babel/env']
    //}))          // remove co
        .pipe(stripeJs())                // remove comentarios
        .pipe(concat('scripts.js'))        // mescla arquivos
        .pipe(uglify())                 // minifica.js
        .pipe(rename({ suffix: '.min'})) //scripts.min.js
        .pipe(gulp.dest('./dist/js'))   // cria arquivo em novo diretorio

        return callback()
}


function tarefasImagem(){
    
    return gulp.src('./src/images/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

// POC Proof of concept
function tarefasHTML(callback){

    gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))

    return callback()
}

gulp.task('server', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process) //repete o processo de verificaçao na pasta src
    // gulp.watch('./dist/**/*').on('change', reload) // se quiser ver a alteração na pasta dist habilitar este comando
    
})


exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem

const process = parallel( tarefasHTML, tarefasJS, tarefasCSS ) //a variavel nao sera alterada na hora da execução

exports.default = process