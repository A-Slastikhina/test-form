
export const server = (done)=>{
    app.plugins.browsersync.init({
        server:{
            baseDir: `${app.path.build.html}`       //папка, откуда запускаем файлы
        },
        notify: false,                              //убираем сообщения об ошибках в браузере  
        port: 3000,                                 //порт локального сервера
    });
}