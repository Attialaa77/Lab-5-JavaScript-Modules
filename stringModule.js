import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';

console.log('Add: ', add(5, 3));  
console.log('Subtract: ', subtract(10, 4));  
console.log('Multiply: ', multiply(4, 5));  
console.log('Uppercase: ', toUpperCase('hello'));  