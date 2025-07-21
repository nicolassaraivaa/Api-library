import NaoEncontrado from '../erros/NaoEncontrado.js';
import { autores } from '../models/index.js';

class AutorController {
    static async listarAutores(req, res, next) {
        try {
            const listaAutores =  autores.find({})

            req.resultado = listaAutores;
        
            next();
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar autores` });
        }
    }

    static listarAutorPorId = async (req, res, next) => {
        try {
            const id = req.params.id;

            const autorEncontrado = await autores.findById(id)

            if (autorEncontrado !== null) {
                res.status(200).send(autorEncontrado);
            } else {
                next(new NaoEncontrado("Id do autor não encontrado")); 
            }

        } catch (erro) {
          next(erro);
        }
    }

    static async cadastrarAutor(req, res, next) {
        try {
            const novoAutor = await autores.create(req.body);
            res.status(201).json({ message: "Autor criado com sucesso!", Autor: novoAutor });
        } catch (erro) {
          next(erro);
        }
    }

    static async atualizarAutor(req, res, next) {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Autor atualizado com sucesso!" });
        } catch (erro) {
            next(erro)

        }
    }

    static async deletarAutor(req, res, next) {
        try {
            const id = req.params.id;
            await autores.findByIdAndDelete(id)
            res.status(200).json({ message: "Autor deletado com sucesso!" });
        } catch (erro) {
          next(erro);
        }
    }
}

export default AutorController