let nome = 'jheisson'
let idade = 23

      switch (idade){
            
            case idade < 16:
                console.log(`${nome}, você não precisa votar`);
                break;
            
            case idade >= 16 && idade <= 17:
                console.log(`${nome}, seu voto é opcional`);
                break;

            case  idade >= 18:
                console.log(`${nome}, seu voto é obrigatorio`);
                break;

        }
    

  

    
        