let show_list = [];
let show = (string) => show_list.push(string);
// Функкции в js
// классический способ задания функции в js
// синтаксис
/* function название(аргументы) { тело функции }
	0 <= кол-во аргументов <= ограничения JS (условно, дохулион)
}
*/

function NAME(arg0, arg1, arg2) {
	// function body
}

// пример f(x) = x^2
// функции начало
function f(x) {
	return Math.pow(x, 2);
}

show(f.toString());
show(`f(5) == ${f(5)} awesome math`)
show("f(5) == " + f(5) + " awesome math");
show(`${[1,2,3]}`);
// функции конец

Number.prototype.seconds = function() {return this*1000}; // в реальном коде так делать не надо
Number.prototype.of_second = Number.prototype.of_seconds = Number.prototype.second = Number.prototype.seconds;

// setInterval и setTimeot
// https://learn.javascript.ru/settimeout-setinterval
// setInterval
const five = 5;
const half = 0.5;

let i = 0;
let repeatingAction = () => console.log(++i);
let timerId = setInterval(repeatingAction, 500);
setInterval("clearInterval(timerId)", five.seconds());

console.log(show_list.join('\n'));
let timeout_seconds = 5;
let timeout_millisecons = timeout_seconds * 1000;
//setInterval("document.location = `${document.location}`", timeout_millisecons);
