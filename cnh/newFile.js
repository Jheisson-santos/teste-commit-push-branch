let idade = ''
let nome = ''
const ano = 2024
let cnh = ''


console.log("Digite seu nome");

process.stdin.once('data', function (data) {
    nome = data.toString().trim();
    console.log(`${nome}, digite sua idade:`);
    
    process.stdin.once('data', function (data){
        idade = data.toString();

        if (idade >= 18){
        console.log(`${nome},você nasceu no ano de ${ano - idade}`);
        
        console.log('voce possui cnh?')
        
        process.stdin.once('data', function (data){
                result = data.toString().trim()
               if (result == 'sim'){
                console.log('Esta aqui para renovar sua carteira?');

                process.stdin.once('data', function(data){
                    pross = data.toString().trim()
                      if (pross == 'sim'){ 
                    console.log('Agende uma data para comparecer ao detran mais próximo')
                    process.exit()
                    } else {console.log('Nos vemos mais tarde :)');
                        process.exit()
                    }
                })
              
               } else {console.log('Continue para criar sua nova carteira');
                process.exit()
               }
            
        })} if ( idade <= 17){console.log(`${nome}, você não tem a idade miníma permitida para a obtenção de uma carteira de habilitação`) 
    process.exit()
}
})
})