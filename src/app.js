import express from 'express';
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';
import manipulador404 from './middlewares/manipulador404.js';

const conexao = await conectaNaDatabase();

conexao.on('error', (error) => {
    console.error("Erro na conexão com o MongoDB:", error);
});

conexao.once('open', () => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
});

const app = express();
routes(app);

app.use(manipulador404)

app.use(manipuladorDeErros)

export default app;

