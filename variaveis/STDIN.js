let entradaUsuario = '';

process.stdin.once('data', function(data) {
    entradaUsuario = data.toString();
    
    console.log(`Seja bem-vindo ${entradaUsuario}`);

    process.exit()
})