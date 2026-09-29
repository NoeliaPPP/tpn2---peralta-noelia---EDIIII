function saludar(nombre){
    return `Hola, ${nombre}`;
}

function holamundo(){
    return `Hola Mundo NodeJs`;
}

module.exports.saludar = saludar;
module.exports.holamundo = holamundo;