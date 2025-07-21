import mongoose from "mongoose"; 

async function conectaNaDatabase () {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log("Conexão com o MongoDB estabelecida com sucesso!")
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error)
    }

    return mongoose.connection;
}


export default conectaNaDatabase;