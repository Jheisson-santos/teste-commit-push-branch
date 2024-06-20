let hobbies = [];

console.log('Digite um Hobbie')

process.stdin.on('data', function(data){
    let meusHobbies = data.toString().trim();


        if(meusHobbies == 'sair'){
            console.clear()
            console.log('seus hobbies são' + hobbies)
        
        let i = 0 
        hobbies.forEach(dado => {
            i++
            console.log(`${i}. ${dado}`)
        });
        process.exit()
        }else{
        console.clear()
        hobbies.push(meusHobbies)
        console.log('Digite mais um hobbie ou "sair" para finalizar')
    }
})
