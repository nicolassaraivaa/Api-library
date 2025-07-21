import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase {
    constructor(mensasgem = "Um ou mais dados fornecidos estão incorretos") {
        super(mensasgem, 400);
    } 
}

export default RequisicaoIncorreta;