import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase {
    constructor(mensagem = "Endpoint não encontrado") {
        super(mensagem, 404 )
    }   
}

export default NaoEncontrado;