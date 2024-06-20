//  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // console.log(numeros)
// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }

let inp = ''
let arm = []


process.stdin.on('data', function(data){
    inp = data.toString().trim()
   
 if(inp != 'sair'){   
        arm.push(inp)
        for( let i = 0; i <arm.length; i++){
            
        }
    } else { 
        console.log('Seus numeros são')
        for(let j = 0; j <arm.length; j++)
        console.log(arm[j]);
        process.exit()
    }
});
