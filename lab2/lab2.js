/*Array en Javascript*/

//'use strict'*/

var my_array = new Array();

var other_array = [];

my_array =[1,3,3,3,4,4,555,55,666,6,6,666666];

console.log(my_array);

console.log(my_array[3]);

other_array = ['a', 'n', 'abdcdefgh', 'hdhdhdh'];

console.log(other_array);

/* metodos sobre los arreglos */

// agregando elmento despu{es de la ultima posicion

my_array.push(39);

other_array.push('hola mundo');

console.log(other_array);

console.log(my_array);

//eliminar el ultimo elemento

my_array.pop();

other_array.pop();

//eliminar el primer elemento

my_array.shift();

other_array.shift();

console.log(other_array);

console.log(my_array);

//organizar elementos
my_array.sort();

other_array.sort();

console.log(other_array);

console.log(my_array);

tasks = ['comer', 'dormir', 'jugar'];

console.log(tasks);

tasks.splice(1,3, "Estudiar", "saltar", "correr");

console.log(tasks);
