let par = []
let imp = []

process.stdin.on('data', function(data){
    let num = data.toString().trim()
if(num != 'sair'){
    if(num % 2 == 0){
     par.push(Number(num))
}   else if(num % 2 == 1){
     imp.push(Number(num))
}
} else{
    console.log('numeros pares')
    console.log(`Você digitou ${par.length} numeros pares`)
for( let i = 0; i < par.length; i++){
   console.log(par[i])
}
console.log('numeros impares')
console.log(`Você digitou ${imp.length} numeros impares`)
for( let j = 0; j < imp.length; j++){
    console.log(imp[j])
}
process.exit()
}
})