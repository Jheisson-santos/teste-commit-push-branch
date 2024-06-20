let frase = [] 

console.log("Digite uma frase!")
process.stdin.once('data', function(data){
    
    frase = data.toString().toLowerCase().trim();
    frase = frase.replace(/ /g,'')
   if(frase.length % 2 === 1){
    console.log(`o numero de caracteres é ${frase.length} portanto é impar`)
    process.exit()
   } else { console.log(`o numero de caracteres é ${frase.length} portanto é par`)
    process.exit()
   } 
})