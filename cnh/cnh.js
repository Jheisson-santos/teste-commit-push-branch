let idade = ''
let nome = ''
const ano = 2024
let cnh = ''
result = ano - idade

console.log("Digite seu nome");

process.stdin.once('data', function (data) {
    nome = data.toString().trim();
    console.log(`${nome}, digite sua idade:`);
    process.stdin.once('data', function (data) {
        idade = data.toString();


        console.log(`${nome},você nasceu no ano de ${ano - idade}`);
        
        
        
        console.log('voce possui cnh?')
        
        process.stdin.once('data', function (data){
                result = data.toString().trim()
               if (result === 'sim'){
                console.log('Renove se precisar');
               } else {console.log('Continue para criar sua nova carteira');}
                
               
               process.exit()
        })
    })
})
