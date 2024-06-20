// const readline = require('readline')

// const rl = readline.createInterface({
//     input : process.stdin,
//     output: process.stdout
// })


// rl.question('Digite seu nome: ', (nome) => {
//     console.log(`ola, ${nome}`)
//     rl.close()
// })

// let numero = 11
// if(numero % 2 != 0){
//     console.log('impar')
// } else {
//     console.log('par')
// }
// let idade = 19
// let crime = 'sim'
// let gravidade = 'baixa'
// if(idade >= 18){
//     if(crime == 'sim'){
//         if(gravidade == 'alta'){
//             console.log('30 anos de cadeia');
//         } else{
//             console.log('5 anos de cadeia');
//         }

//     } else {
//         console.log('liberdade');
//     }
// } else if(idade >= 16 && idade <= 17){

//      console.log('irá para o reformatorio');
//     }
// else { 
//     console.log('você não pode ser preso');
//  }
console.log('Digite a temperatura Fahrenheit (F), kelvin (K) celsius (C)');
process.stdin.once('data', function(data){
    let inp = data.toString().trim().toLowerCase()
    if(inp == 'f'){
        console.log('Digite a temperatura em Fahrenheit');
        process.stdin.once('data', function(data){
            let far = Number(data)
            let tempF = (far - 32) / 1.8
            console.log(`${Math.round(tempF)} Celsius`);
            tempK = tempF + 273.15
            console.log(`${Math.round(tempK)} Kelvin`);
            process.exit()
        })
    } else if(inp == 'k'){
        console.log('Digite a temperatura em Kelvin');
        process.stdin.once('data', function(data){
            let kel = Number(data)
            let tempC = kel - 273.15
            console.log(`${Math.round(tempC)} Celsius`);
            let  tempK = tempC * 1.8
            let resultC = tempK + 32
            console.log(`${Math.round(resultC)} Fahrenheit`);
            process.exit()
        })
    } else if(inp == 'c'){

        console.log('Digite a temperatura em Celsius');
        process.stdin.once('data', function(data){
            let cel = Number(data)
           let tempC = cel * 1.8
           let resultC = tempC + 32
           console.log(`${Math.round(resultC)} Fahrenheit`);
           let tempK = cel + 273.15
           console.log(`${Math.round(tempK)} Kelvin`);
           process.exit()
        })
    } else {console.log('Letra digitada não se encaixa a nenhuma das alternativas');
        process.exit()
    }
})




          




