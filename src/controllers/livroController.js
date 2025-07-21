import { autores } from '../models/Autor.js';
import { livro } from '../models/index.js';

class LivroController {
    static async listarLivros(req, res, next) {
        try {
            const buscaLivros = livro.find()

            req.resultado = buscaLivros

            next();
        } catch (error) {
            next(error);
        }
    }

    static async listarLivroPorId(req, res, next) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado);
        } catch (error) {
            next(error);
        }
    }

    static async cadastrarLivro(req, res, next) {
        const novoLivro = req.body

        try {
            const autorEncontrado = await autores.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Livro criado com sucesso!", Livro: livroCriado });
        } catch (error) {
            next(error);
        }
    }

    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Livro atualizado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    static async deletarLivro(req, res, next) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id)
            res.status(200).json({ message: "Livro deletado com sucesso!" });
        } catch (error) {
            next(error);
        }
    }

    static async listarLivrosPorFiltro(req, res, next) {
        try {
            const busca = await processaBusca(req.query);

            if (busca !== null) {
                const livrosResultados = livro
                    .find(busca)
                    .populate("autor")
                
                req.resultado = livrosResultados;

                next();

            } else {
                res.status(200).send(["Nenhum autor encontrado com o nome informado"]);
            }


        } catch (error) {
            next(error);
        }
    }
}

async function processaBusca(parametros) {
    const { editora, titulo, minPag, maxPag, nomeAutor } = parametros

    const regex = new RegExp(titulo, "i")

    let busca = {}

    if (editora) busca.editora = editora;
    if (titulo) busca.titulo = regex;

    if (minPag || maxPag) busca.paginas = {};

    if (minPag) busca.paginas.$gte = minPag;
    if (maxPag) busca.paginas.$lte = maxPag;

    if (nomeAutor) {
        const autor = await autores.findOne({ nome: nomeAutor })

        if (autor !== null) {
            busca.autor = autor._id;
        } else {
            busca = null
        }

    }

    return busca;
}

export default LivroController