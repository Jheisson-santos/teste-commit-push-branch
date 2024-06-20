
let aluno1 = [];

console.log('Digite a nota da primeira prova')

process.stdin.once('data', function(data){
    aluno1[0] = Number(data.toString().trim());
    
    console.log('Digite a nota da segunda prova')
    process.stdin.once('data', function(data){
        aluno1[1] = Number(data.toString().trim());
            console.log('Digite a nota da terceira prova')
        
        process.stdin.once('data', function(data){
            aluno1[2] = Number(data.toString().trim())
                console.log('Digite o nome do aluno');
            
            process.stdin.once('data', function(data){
                aluno1[3] = data.toString().trim();

                    result = (aluno1[0] + aluno1[1] + aluno1[2]) / 3

                    if(result >= 7.5){
                        console.log(`O aluno ${aluno1[3]} obteve amédia de ${result} e foi aprovado!`)
                        process.exit()
                    } else if(result >= 5 && result <= 7.4){
                        console.log(`O aluno ${aluno1[3]} obteve amédia de ${result} e está de recuperação`)
                        process.exit()
                    } else { 
                        console.log(`O aluno ${aluno1[3]} obteve amédia de ${result} e está reprovado`)
                        process.exit()
                    }
            })
        })
    })
})