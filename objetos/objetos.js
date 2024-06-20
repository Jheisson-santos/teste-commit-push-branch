let pessoa = {
    nome: "",
    idade: '',
    cnh: "",
    pross: "",
};

console.log("Digite seu nome")

process.stdin.once('data', function(data){
    pessoa.nome = data.toString().trim()
    console.log(`${pessoa.nome}, digite a sua idade.`);
    process.stdin.once('data', function(data){
        pessoa.idade = Number(data.toString().trim());
            
        if (pessoa.idade >= 18){
            console.log(`${pessoa.nome} você tem cnh?`)
    process.stdin.once('data', function (data){
                pessoa.cnh = data.toString().trim().toLowerCase()
               if (!pessoa.cnh == 'sim'){
                console.log('Esta aqui para renovar sua carteira?');

                process.stdin.once('data', function(data){
                    pessoa.pross = data.toString().trim().toLowerCase()
                      if (!pessoa.pross == 'sim'){ 
                    console.log('Agende uma data para comparecer ao detran mais próximo')
                    process.exit()
                    } else {console.log('Nos vemos mais tarde :)');
                        process.exit();
                    }
                })
              
               } else {console.log('Continue para criar sua nova carteira');
                process.exit();
               }
            
        })
        } else {console.log(`${pessoa.nome}, você não tem a idade minima permitida para a emissão da CNH`)
                process.exit();
        }
    })
    
    
})


//toLowerCase é usado para poder transformar todas as letras digitadas pelo usuario em letras minusculas
//