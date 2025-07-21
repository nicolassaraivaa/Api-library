import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: {
        type: String, 
        required: [true, 'O título do livro é obrigatório'],
    },
    editora: {
        type: String, 
        required: [true, 'A editora do livro é obrigatória'],
        enum: {
            values: ["Casa do codigo", "Alura", "Manga"],
            message: 'A editora deve ser "Casa do codigo" ou "Alura"'
        }
    },
    preco: {type: Number},
    paginas: { 
        type: Number,
        min: [10, 'O livro deve ter pelo menos 10 página'],
    },
    autor: autorSchema
}, {versionKey: false} )

const livro = mongoose.model('livros', livroSchema);
   
export default livro; 