console.log("Digite seu nome: ");

var nome = ''
var idade = ''

process.stdin.once('data', function(data){
    nome = data.toString().trim();
    console.log(`${nome}, digite sua idade`)
    process.stdin.once('data', function(data){
        idade = data.toString();
        

        console.log(`Seja bem-vindo ${nome},você tem ${idade} anos`)



 process.exit()
})
})

