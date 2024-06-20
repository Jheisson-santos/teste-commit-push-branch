let alunos = [];

console.log('Digite a nota da primeira prova')

process.stdin.once('data', function(data){
    alunos[0] = Number(data.toString().trim());
    
    console.log('Digite a nota da segunda prova')
    process.stdin.once('data', function(data){
        alunos[1] = Number(data.toString().trim());
            console.log('Digite a nota da terceira prova')
        
        process.stdin.once('data', function(data){
            alunos[2] = Number(data.toString().trim())
                console.log('Digite o nome do aluno');
            
            process.stdin.once('data', function(data){
                alunos[3] = data.toString().trim();

                    result = (alunos[0] + alunos[1] + alunos[2]) / 3

                   
                if(alunos[0] > alunos[1] && alunos[0] > alunos[2]){
                    console.log(`A maior nota é ${alunos[0]}`)
                } else if(alunos[1] > alunos[0] && alunos[1] > alunos[2]){
                    console.log(`A maior nota é ${alunos[1]}`)
                } else if(alunos[2] > alunos[0] && alunos[2] > alunos[1]){
                    console.log(`A maior nota é ${alunos[2]}`)
                }

                if(alunos[0] < alunos[1] && alunos[0] < alunos[2]){
                    console.log(`A menor nota é ${alunos[0]}`)
                } else if(alunos[1] < alunos[0] && alunos[1] < alunos[2]){
                    console.log(`A menor nota é ${alunos[1]}`)
                } else{console.log(`A menor nota é ${alunos[2]}`)}  
                
                if(result >= 7.5){
                    console.log(`O aluno ${alunos[3]} obteve amédia de ${result} e foi aprovado!`)
                    process.exit()
                } else if(result >= 5 && result <= 7.4){
                    console.log(`O aluno ${alunos[3]} obteve amédia de ${result} e está de recuperação`)
                    process.exit()
                } else { console.log(`O aluno ${alunos[3]} obteve amédia de ${result} e está reprovado`)
                    process.exit()}
                    process.exit()
            })
        })
    })
})