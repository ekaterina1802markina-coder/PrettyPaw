import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(['scr/img*.{jpg,png}'], {
    destination: 'src/img',
    plugins: [
        imageminWebp({quality: 70}),
    ]
});

console.log('Коверсация в wedp завершена');
