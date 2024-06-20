

console.log('Digite um numero');

process.stdin.once('data', function(data){
       let numero = Number(data.toString().trim())
        
        if (numero % 2 === 0){
         console.log('O numero é par');
         process.exit()
        } else {console.log('O numero é impar');
            process.exit()
        }
    
})