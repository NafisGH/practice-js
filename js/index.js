// function pow(a, b) {
//   let res = a;
//   for (let i = 1; i < b; i++) {
//     res = res * a;
//   }
//   return res;
// }

// console.log(pow(5, 3));

// function outer(a) {
//   let x = a;
//   return () => {
//     return x++;
//   };
// }

// let resOuter = outer(5);
// console.log(resOuter());
// console.log(resOuter());

// function pow(x, y) {
//   if (y === 0) {
//     return 1;
//   }
//   return x * pow(x, y - 1); // результат выполнения следующей функции
// }

// let result = pow(5, 3);

// console.log(result);

// 1. Происходит контекст вызова ф-ии pow, в локальной памяти запишется x=5 y=3,
// дальше происходит проверка if (y === 0) вернет false, return x * pow(x, y - 1); // результат выполнения следующей функции. 5 * pow(5, 3 - 1) равно 5 * 25 = 125 возвращается результат
// 2. Возвращает результат действия ф-ии pow в локальной памяти запишется x=5 y=2,
// дальше происходит проверка if (y === 0) вернет false, return x * pow(x, y - 1); // результат выполнения следующей функции. 5 * pow(5, 2 - 1) равно 5 * 5 = 25 возвращается выше
// 3. Происходит контекст вызова ф-ии pow, в локальной памяти запишется x=5 y=1,
// дальше происходит проверка if (y === 0) вернет false, return x * pow(x, y - 1); // результат выполнения следующей функции. 5 * pow(5, 1 - 1) равно 5 * 1 = 5 возвращается выше
// 4. Происходит контекст вызова ф-ии pow, в локальной памяти запишется x=5 y=0,
// дальше происходит проверка if (y === 0) вернет 1 в предыдущей вызов функции

// // Стек
// // так же появляется 4 стек вызова
// // так же появляется 3 стек вызова
// // так же появляется 2 стек вызова
// // так же появляется 1 стек вызова

// console.log(NaN + 1);
// console.log(NaN + "o");
// console.log(undefined + 1);
// console.log(undefined - 1);
// console.log(null + 1);
// console.log(null / 1);
// console.log(5 / undefined);
// console.log(-5 / null);
// console.log(null == 0);
// console.log(null == "");
// console.log(null > 0);
// console.log(null >= 0);

// function name(params) {
    
// }
// let fn = function() {

// }
// let fn2 = () => {

// }
// const mm = () => {

// }

// class Human {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//  say() {
//     console.log(`Hello i'm ${this.firstName}`)
//  }
// }


// let sport = new Human('Nafis', 'Garifullin')
// let sport2 = new Human('Bob', 'Gol')
// console.log(sport.say())

// class Developer extends Human {
//     constructor(firstName, lastName){
//         super(firstName, lastName)
//     }
// }

// proto у всех обьектов есть
// у фанкшн и у класаа есть ПРОТОТИП, обьект который является классом либо функцией имеет ПРОТОТИП class Component {}, function Component() {}, const API = function() {}

// let form = document.querySelector('form');
// let div = document.querySelector('div');
// let p = document.querySelector('p');

// document.getElementById('parent').addEventListener('click', function(event) {
//     // console.log('event.target:', event.target); // Вернет кнопку
//     console.log('event.currentTarget:', event.currentTarget); // Вернет div#parent
// });

// document.getElementById('child').addEventListener('click', function(event) {
//     console.log('event.target:', event.target); // Вернет кнопку
//     console.log('event.currentTarget:', event.currentTarget); // Вернет кнопку
// });



// Promise, reject ("a")
// .catch((p) => p + "b")
// .catch((p) => p + "c")
// .then ((p) => p + "d")
// .then ((p) => p + "f")
// .catch((p) => p + "h")
// .finally((p) => p + "e")
// .then ((p) => console. log (p));

// console. log ("1");
// setTimeout (() => console. log ("2"), 1);
// let promise = new Promise ( (resolve) => {
//     console.log("3")
//     resolve()
// });
// promise. then (() => console. log ("4"));
// setTimeout (() => console. log ("5"));
// console. log ("6");


// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu",
//     opa: {
//         red: "red"
//     }
//   };
  



// class Human {
//     constructor(name, lastName) {
//         this.name = name
//         this.lastName = lastName
//     }
//     say() {
//         console.log(`Hello my name is ${this.name}`)
//     }
   
    
// }

// let man = new Human('Nafis', "Garifullin")
// man.say()
// let man2 = new Human('Samir', "Garifullin")
// console.log(man)
// console.log(man2)
  
// Promise.resolve()
// .then(() => console.log(1))
// .then(() => console.log(1));

// Promise.resolve()
// .then(() => console.log(2))
// .then(() => console.log(2));

// console.log('a' || 'o' || 'c') // a или первое true
// console.log('a' && '' && 'c') // '' и первое false если все true то последний true
// console.log('a' || '' && 'c') // a
// console.log('a' && '' || 'c') // c
// console.log('a' && '' || 'c' && 'd') // d


// console.log ('111');

// setTimeout (() => console.log('222'), 0);

// Promise.resolve('333')
// .then((val) => console.log(val));

// console. log ('444');

// Promise. resolve('555')
// .then((val) => console.log (val));

// console.log('start')

// Promise.resolve(1)
// .then((res) => {console.log(res)})
// .then(() => console.log(3))
// .then(() => console.log(5))

// Promise.resolve(2)
// .then((res) => {console.log(res)})
// .then(() => console.log(4))
// .then(() => console.log(6))

// console.log('end');

class Person {
    constructor(name) {
        this.name = name;
        this.isAdmin = false;
    }
}


function User(name) {
    let a = this
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User("Jack");
  console.log(user.this)
  
  console.log(user.name); 
  console.log(user.isAdmin); 



