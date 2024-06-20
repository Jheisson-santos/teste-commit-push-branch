//let numero = [];
let lista = [3, 4, 6, 8, 35, 32, 5, 81, 2, 5];
let i = '';

process.stdin.once('data', function(data){
        i = data.toString()
        
   for (let num = 0; num < lista.length; num++) {
    const element = lista[num];
    if (element == i){
        console.log('esta')
        process.exit()
    } else { 
        console.log('nao esta');
        process.exit()
    }
    
   }
        // lista.forEach(element => {
        //     if( element == i){
        //         console.log('seu numero esta na lista');
        //         process.exit()
        //     }     
            
        // });
        // console.log('ele nao esta');
        // process.exit()
});
