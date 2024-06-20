let num = []
console.log('Digite um numero. Digite "cresce" para ordem crescente e "decre" para ordem decrescente');
process.stdin.on('data', function(data){
    let inp = data.toString().trim()
    if(inp == 'cresce'){
        num.sort(function(a, b){
            return a - b
        })
        console.log(`Os numeros em ordem crescente é ${num}`);
        process.exit()
    } else if(inp == 'decre'){
        num.sort(function(a, b){
            return b - a 
        })
        console.log(`Os numeros em ordem decrescente é ${num}`);
        process.exit()
    } else {
        num.push(inp)
    }
})
