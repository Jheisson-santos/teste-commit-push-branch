// A condicional switch avalia uma expressão, combinando
// o valor da expressão para a cláusula case, e executa as
// instruções associadas ao case.
// O switch só permite comparar expressões com
// constantes. Se precisarmos comparar com variáveis ou
// verificar faixas de valores, devemos usar o comando if.
// Se não usarmos o comando break em cada case o
// programa continuará até o fim do bloco.

// class classhero{
//     constructor(nome, idade, tipo)
//   {
//       this.nome = nome;
//       this.idade = idade;
//       this.tipo = tipo;
//   }
//   atacar(){
//   let ataque;
  
//   switch(this.tipo){
//   case `mago`:
//       ataque = `magia`;
//       break;
  
//   case `guerreiro`:
//       ataque = `espada`;
//       break;
//   case `monge`:
//       ataque = `artes marciais`;
//       break;
  
//   case `ninja`:
//       ataque = `shurikens`;
//       break;
//   }
//   console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
//   }
//   }
//   let mago = new classhero('Astrid', 26, "mago")
//   let guerreiro = new classhero("Lancelot", 37, "guerreiro")
//   let monge = new classhero("Buda", 1000, "monge")
//   let ninja = new classhero("Kankuro", 17, "ninja")
//   mago.atacar()
//   guerreiro.atacar()
//   monge.atacar()
//   ninja.atacar()

//01
// process.stdin.once('data', function(data){
//  let inp = Number(data.toString())
// switch (inp) {
//     case 1:
//         console.log('Alimento não perecivel');
//         break;

//     case 2:
//         console.log('Alimento perecivel');
//         break;
    
//     case 3:
//         console.log('Vestuario');
//         break;

//     case 4:
//         console.log('Limpeza');
//         break;
//     default:
//         break;
// }
// process.exit()
// })

//02
// process.stdin.once('data', function(data){
//     let inp = data.toString().trim().toLowerCase()

//     switch (inp) {
//         case 'outono':
//             console.log('março a junho');
//             break;
        
//         case 'inverno':
//             console.log('Julho a Setembro');
//             break;

//         case 'primavera':
//             console.log('Outubro a Dezembro');
//             break;

//         case 'verao':
//             console.log('Janeiro a fevereiro');
//             break;
    
//         default:
//             break;
//     }
//     process.exit()
// })

//03
// console.log('Digite o mês que deseja saber a quantia de dias');
// process.stdin.once('data', function(data){
//     let mes = data.toString().trim()
//     let mes1= 31
//     let mes2 = 30
//     let mes3 = 28
//     switch (mes) {
//                 case 'janeiro':
//                 console.log(`${mes1} dias`)
//                 break;
//                 case 'fevereiro':
//                 console.log(`${mes3} dias`)
//                 break;
//                 case 'marco':
//                 console.log(`${mes1} dias`)
//                 break;
//                 case 'abril':
//                 console.log(`${mes2} dias`)
//                 break;
//                 case 'maio':
//                 console.log(`${mes1} dias`)
//                 break;
//                 case 'junho':
//                 console.log(`${mes2} dias`)
//                 break;
//                 case 'julho':
//                 console.log(`${mes1} dias`)
//                 break;
//                 case 'agosto':
//                 console.log(`${mes1} dias`)
//                 break;
//                 case 'setembro':
//                 console.log(`${mes2} dias`)
//                 break;
//                 case 'outubro':
//                 console.log(`${mes1} dias`)
//                 break;  
//                 case 'novembro':
//                 console.log(`${mes2} dias`);
//                 break      
//                 case 'dezembro':
//                 console.log(`${mes1} dias`);
//                 break
    
//         default:
//             break;
//     }
//     process.exit()
// })


