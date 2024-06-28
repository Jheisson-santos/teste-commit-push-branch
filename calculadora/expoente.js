const prompt = require("prompt-sync")({sigit: true})

let base = Number(prompt('Digite base da exponenciação: '))
let expo = Number(prompt('Digite o expoente da exponenciação: '))
let soma = 1

for(let i = 0; i < expo; i++ ){
    let temp = 0
    for(let j = 0; j < base; j++){
        temp += soma
    }
    soma = temp
}
console.log(`${base} ^ ${expo} = ${soma}`);
