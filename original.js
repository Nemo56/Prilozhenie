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
 /*
const arr = [1, 2, 3, 6, 8];

arr.pop();                                    // удаляет последний элемент массива
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

})                        
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
products.sort(compareNum);*/

// 22 Передача по ссылке или по значению, Spread оператор (ES6-ES9)

/* let a = 5,
    b = a;

b = b + 5;

console.log (b); //выводит 10
console.log (a); //выводит 5

const obj =  {
    a:5,
    b:1
};

const copy = obj; // copy передается ссылка на obj

copy.a = 10;

console.log (copy); // выводит { a: 10, b: 1 }
console.log (obj);  // выводит { a: 10, b: 1 } т.е. меняя copy  меняется и obj

// 1 способ клонирования объекта
function copy (mainObj) {       //эта функция копирует все элементы объекта obj
    let Objcopy = {};           // получается поверхностная копия (вложенные объекты также соединены ссылкой)
    let key;
    for (key in mainObj){
        Objcopy[key] = mainObj[key];
    }
    return Objcopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers =  copy(numbers);
newNumbers.a = 10;

//console.log(newNumbers); //выводит { a: 10, b: 5, c: { x: 7, y: 4 } }
//console.log(numbers);   // выводит { a: 2, b: 5, c: { x: 7, y: 4 } }

// 2 способ клонирования объекта
const add={
    d:17,
    e:20
};

console.log (Object.assign(numbers, add)); //выводит { a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 } 
                                          //соединились 2 объекта
const clone = Object.assign({}, add);   //  копия add сохраняется в clone

clone.d=20;

console.log(add);
console.log(clone);

// создание поверхностных копий массивов
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sdsfsdf';
console.log(newArray);
console.log(oldArray);

// способ через spread оператор

const video = ['youtube', 'vimeo', 'rurube'],
     blogs = ['wordpress', 'livejournal', 'blogger'],
     internet = [...video, ...blogs, 'vk', 'facebook']; //оператор разворота развернул структуры на отд эл.

console.log(internet);

// еще один способ через spread оператор

function log(a, b, c) {
    console.log (a);
    console.log (b);
    console.log (c);
}

const num = [2, 5, 7]

log(...num);

//4 способ создания поверхностной копии объект

const array = ["a", "b"];

const newwArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log (array);
console.log (newwArray);
console.log (q);
console.log (newObj); */

// 23 Основы ООП, прототипно-ориентированное наследование

/*let str = 'some';
let strObj = new String(str);

console.log(typeof(str));       // в консоли string
console.log(typeof(strObj));    // в консоли object

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log("Hello");
    }
};

const john = {
    health:100
};

Object.setPrototypeOf(john, soldier); //john наследует все свойстваи методы прототипа soldier

john.sayHello();
//либо делаем так
const john = Object.create(soldier);  // на этапе создания переменной/объекта даем ему прототип
*/

