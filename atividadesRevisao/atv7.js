
let arrayUsua = [];

process.stdin.once('data', function(data){
   let numeUsua = data.toString().trim()
    arrayUsua = numeUsua.split(',')

    arrayUsua.forEach(element => {
        if(element >= 0 && element <= 25){
            console.log(`seu numero ${element} esta entre 0 e 25`);
        } else if(element >= 26 && element <= 50){
            console.log(`seu numero ${element} esta entre 26 e 50`);
        } else if(element >= 51 && element <= 75){
            console.log(`seu numero ${element} esta entre 51 e 75`);
        } else if(element >= 76 && element <= 100){ 
            console.log(`seu numero ${element} esta entre 76 e 100`);
        }
        
    });
    process.exit()
})