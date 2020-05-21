'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
}

detectPersonalLevel ();

function showMyDB () {
        if (personalMovieDB.privat == false ) {
            console.log(personalMovieDB);
        }

}

showMyDB ();

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(a) ;
    }
}

writeYourGenres ();


console.log(personalMovieDB.genres);

/* 19. callback функции (позволяют запускать функцию сторого после выполнения предыдущей)

function learnJS (lang, callback) {
    console.log (`Я учу ${lang}`);
    callback ();
}

function done () {
    console.log ('Я прошел этот урок!');
}

learnJS ('JavaScript', done); */


/*const fruit = "Some fruit";
console.log (fruit.indexOf("f"));
const log = ('Hello world');
console.log (log.slice(0,6));

const num =12.5;
console.log (Math.round (num));

const test = "12.2px";
console.log (parseInt(test));
console.log (parseFloat(test));*/

//20. Объекты, деструктуризация объектов (ES6)

/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {                 //создаем свой метод
        console.log ('Test');
    }
};

options.makeTest ();                        //проверка работы метода makeTest

const {border , bg} = options.colors;       //деструктуризация объекта options

 console.log (Object.keys(options).length); //считает количество элементов объекта options
// console.log (options["colors"]["border"]);// обращение к объекту внутри объекта (вложенное свойство)
for (let key in options) {                  // перебор и вывод в консоль всех элементов объекта options
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log (`Свойство ${i} имеет значение ${options[key][i]}`);    // перебор внутри перебора для
        }                                                                       //отображения всех элементов colors
    }else {
        console.log (`Свойство ${key} имеет значение ${options[key]}`);
    }
 
}*/

// 21 массивы и псевдомассивы
 
const arr = [1, 2, 3, 6, 8];

/*arr.pop();                                    // удаляет последний элемент массива
arr.push(8);                                  // добавляем элемент в конец массива

for (let i=0; i<arr.length; i++) {              // перебираем все элементы и выводим в консоль (способ 1)
    console.log(arr[i]);
}

for (let value of arr) {                        // перебираем все элементы и выводим в консоль (способ 2)
    console.log(value);
}
arr[99] = 0; //добавляем 99 элемент массива если проверить через arr.length он скажет что в массиве arr
            // 100 элементов, из них 94 пустых
            

arr.forEach (function(item, i, arr) {           // метод перебора элементов, который включает в себя callback функцию   
       console.log (`${i}: ${item} внутри массива ${arr}`);                             //применяет данную функцию к каждому элементу массива

})       */                 
//преобразуем строку в массив
const str = prompt ("", "");            // пользователь вводит список чего-либо
const products = str.split (", ");        //мы должны точно знать разделить элементов
console.log (products);                     //выводим в консоль массив, который преобразовался из строки

//наоборот массив преобразуем в строку
console.log (products.join('; '));

products.sort();                //сортировка массива по алфавиту, числовые массивы как строки (10,13,2,26,8)

function compareNum (a,b) {  // сортировка числового массива по возрастанию
    return a-b;
}
products.sort(compareNum);
