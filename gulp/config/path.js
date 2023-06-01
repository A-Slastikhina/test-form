import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js:`${buildFolder}/js/`,
        images:`${buildFolder}/img/`,
        scss: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts:`${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html:`${srcFolder}/*.html`,
        fonts:`${srcFolder}/**/.{otf,ttf,woff,woff2}`,
       files: `${srcFolder}/files/**/*.*`,

    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        fonts:`${srcFolder}/fonts/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp:``

}