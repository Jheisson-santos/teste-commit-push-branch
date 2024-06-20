//ATIVIDADE 1
// let num = []
// let soma = 1
// process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//    num.push(Number(inp))
//     let sucessor = num[0]+ soma
//     let antecessor = num[0] - soma
//     console.log(`${antecessor} é antecessor do numero ${num[0]} e o seu sucessor é ${sucessor}`)
//     process.exit()
// })

//ATIVIDADE 2
// let aluno = []
// let nota = []

// console.log('Digite o nome do aluno');
// process.stdin.once('data', function(data){
//    let inp = data.toString().trim()
//    aluno.push(inp)
//     console.log('Digite as notas do aluno');
//     process.stdin.on('data', function(data){
//         let inp2 = data.toString().trim()
//         nota.push(Number(inp2))
        
//         if(inp2 != 'sair'){
//             let soma = 0
//             for(let i = 0; i < nota.length; i++){
//                 soma = soma + nota[i];
//                 media = soma / nota.length
//             } 
            
//         } else{
//             if(media <= 7.4){
//                 console.log(`O aluno ${aluno} obteve a media ${media} portanto está REPROVADO`);
//                 process.exit()
//             } else if (media >= 7.5){
//                 console.log(`O aluno ${aluno} obteve a media ${media} portanto está APROVADO`);
//                 process.exit()
//             }
// }
// })
// })

//ATIVIDADE 3
// let valores = []
// let c = []
// process.stdin.on('data', function(data){
//     let inp = data.toString().trim()
    
//     if( inp == 'sair'){
//         let soma = 0
//         c.push(valores.pop())
//         for (let i = 0; i < valores.length; i++) {
//             soma += valores[i]
            
//         }
//         if(soma > c){
//             console.log(`A soma dos numeros é ${soma}`)
//             console.log(`A soma de x e y é maior que z`)
//             process.exit()
//         } else if(soma < c){
//             console.log(`A soma dos numeros é ${soma}`)
//             console.log(`A soma de x e y é menor que z`)
//             process.exit()

//         } else {
//             console.log(`A soma dos numeros é ${soma}`)
//             console.log(`A soma de x e y é igual à z`)
//             process.exit()
//         }
       
//     }else {
//         valores.push(Number(inp))
//         }
// })

//ATIVIDADE 4
// let num = []

// process.stdin.on('data', function(data){
//     let inp = data.toString().trim()
//     if(inp == 'sair'){
//         for(let i = 1; i < num.length; i++){
            
//             let soma = num[i - 1]
//             if(num[i - 1] == num[i]){
//                 soma += num[i]
//                 console.log(soma)
//                 process.exit()
//             } else {
//                 soma = soma * num[i]
//                 console.log(soma)
//                 process.exit()
//             }
//         } 
//     } else {num.push(Number(inp))}
//     })


//ATIVIDADE 5
