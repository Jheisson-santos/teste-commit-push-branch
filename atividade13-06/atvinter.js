// ATIVIDADE 01)
//  let usuario = {
//     nome: '',
//     rua: '',
//     numero:'',
//     bairro: '',
//     cidade:'',
//     uf:''
// }
// console.log('Digite seu nome');
//  process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     usuario.nome = inp

//     console.log('Digite seu Endereço \nRua: ');
//  process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     usuario.rua = inp

//     console.log('Numero');
//  process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     usuario.numero = Number(inp)

//     console.log('Bairro');
//  process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     usuario.bairro = inp

//     console.log('cidade');
//  process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     usuario.cidade = inp

//     console.log('Unidade Federativa (estado)');
//  process.stdin.once('data', function(data){
//     let inp = data.toString().trim()
//     usuario.uf = inp
//     console.log(`O usuario ${usuario.nome}, mora em ${usuario.cidade} no ${usuario.uf}, bairro ${usuario.bairro}, ${usuario.rua}, no número ${usuario.numero}`);
//     process.exit()
// })
// })
// })
// })
// })
// })


// ATIVIDADE 02)
// let skills = []
// let SkillDesejada = ''
// let bollean = true
// console.log('(Recrutador) Digite a Habilidade que procura');
// process.stdin.once('data', function(data){
//     SkillDesejada = data.toString().trim().toLowerCase()
//     console.log('Digite suas habilidades: \nAo digitar todas, digite "finalizar" para encerrar o programa');
//     process.stdin.on('data', function(data){
//         let inp = data.toString().trim().toLowerCase()
//         if(inp != 'finalizar'){
//             skills.push(inp)
//         } else {
//             if(skills.includes(SkillDesejada)){
//                 console.log('Legal!!! Você se encaixa no perfil');
//                 process.exit()
//             } else { console.log('Lamento, seu perfil não se encaixa na vaga')
//             process.exit();}
//         }
//     })
//     })
                        

//ATIVIDADE 03)

// let usuario = {
//     nome: '',
//     skills: []
// }
// console.log('Digite o seu nome:');
// process.stdin.once('data', function(data){
//      usuario.nome = data.toString().trim().toLowerCase()
//      console.log('Digite suas habilidades e "finalizar" para imprimir suas habilidades');
//     process.stdin.on('data', function(data){
//         let inp = data.toString().trim().toLowerCase()
//         if(inp != 'finalizar'){
//             usuario.skills.push(inp)
//         } else {
//             console.log(`O candidaro '${usuario.nome}' tem as seguintes habilidades: ${usuario.skills}`);
//             process.exit()
//         }
//     })
// })
