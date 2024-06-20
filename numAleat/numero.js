let inp = ''
console.log('Escolha um numero acima de 0 para que possam advinhar')
process.stdin.once('data', function(data){
  let inp = Number(data)
  let vidas = Math.ceil(inp/3/2)
 let numAle = Math.floor(Math.random() * inp) + 1;
 
  console.log(`tente acertar o numero entre 0 e ${inp}, você tem ${vidas} tentativas`)
process.stdin.on('data', function(data){
  inp = Number(data)
  if(inp == numAle){
    console.log('Acertou')
    process.exit()
  } else if(inp != numAle){
    vidas--
    if(inp > numAle){
      console.log(`Você errou! \nO numero é menor \nVocê tem ${vidas} tentativas`)
      console.log(`\n`);
    } else if(inp < numAle){
      console.log(`Você errou! \nO numero é maior \nVocê tem ${vidas} tentativas`)
      console.log(`\n`);
    }
  } 
  if(vidas == 0){
    vidas--
    console.log(`VOCÊ PERDEU \nO numero era ${numAle}`)
    process.exit()
  }
})
})
