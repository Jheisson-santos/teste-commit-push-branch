const prompt = require('prompt-sync')({sigit: true})
let numero = +prompt('Digite seu numero: ')
let temp = 1
for(let i = 1; i <= numero; i++){
    temp *= i
}
console.log(temp);