const prompt = require('prompt-sync')({sigit: true})

console.log('Conte uma historia sua: ')
let hist = prompt('')
let cortar = hist.split(' ')
console.log(`Sua historia tem ${cortar.length} palavras`);
let armz = {}  
  for(let i = 0; i < cortar.length; i++){
    if(typeof cortar[i] === 'string'){
        armz[cortar[i]] = (armz[cortar[i]] || 0) + 1;
    }
  }
  for( let key in armz){
    if(armz[key] > 1){
    console.log(`A palavra ${key} aparece ${armz[key]} vezes`);
  }}