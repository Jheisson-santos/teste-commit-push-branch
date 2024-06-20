//01 
//let nome = []

// process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     nome.push(inp)
//     console.log(`Olá ${nome}`)

//02
// let numero = 234
// let bool 

// if(numero % 2 == 0){
//     bool = true
// } else {
//     bool = false
// }
// console.log(`O numero ${numero} é ${bool}`);

//03
// let idade = 23

// if(idade >= 16){
//     console.log("você pode votar");
// } else {
//     console.log('você não pode votar');
// }
//a parte que será executada é a do 'você pode votar', pois a idade é maior que 16 e entra na primeira condicional

//04
// let idade = 25
// if(idade >= 18){
//     console.log("você pode dirigir");
// } else {
//     console.log('você não pode dirigir');
// }
//a parte que será executada é a do 'você pode dirigir', pois a idade é maior que 16 e entra na primeira condicional

//05
// let numeros = [1, 2, 3, 4, 5]
// let soma = 0

// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 != 0){
//         soma += numeros[i]
//     }
//     }
// console.log(soma);
//O retorno da soma será 9, o 'for' percorrera o array 'numeros' e o 'if' irá pegar os numeros ímpares e somar usando o 'soma+= numeros[i]'.


//06
//A)
// let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
// let soma = 0
// for(let i = 0; i<notas.length; i++){
//     soma += notas[i]
// }
// media = soma / notas.length
// console.log(media);
 
//B)
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let min = 99999
let max = 0

for (let i = 0; i < notas.length; i++) {
   if(min > notas[i]){
    min = notas[i]
   }
   if(max < notas[i]){
    max = notas[i]
   }
    
}
console.log(min);
console.log(max);


