# API Library 📚

API RESTful para gerenciamento de livros e autores, desenvolvida com **Node.js**, **Express** e **MongoDB** (via Mongoose).

## 🔧 Funcionalidades

- CRUD completo de **livros** e **autores**
- Filtros avançados de busca por:
  - Título
  - Editora
  - Número de páginas
  - Nome do autor
- Paginação e ordenação de resultados
- Validação e tratamento de erros personalizados

---

## 📌 Passos para Executar

1. ##  Clone o repositório:
   ```bash
   gh repo clone nicolassaraivaa/Api-library
   cd Api-library

2. ## Instale as dependências:
   ```bash
   npm install

3. ## Rode o projeto no terminal:
   ```bash
   npm run dev

---

## 📌 Endpoints principais

### 📚 Livros

- `GET /livros` — Lista todos os livros (com paginação)
- `GET /livros/busca` — Busca livros por filtros (título, editora, páginas, autor)
- `GET /livros/:id` — Busca livro por ID
- `POST /livros` — Cadastra novo livro
- `PUT /livros/:id` — Atualiza livro
- `DELETE /livros/:id` — Remove livro

### ✍️ Autores

- `GET /autores` — Lista todos os autores (com paginação)
- `GET /autores/:id` — Busca autor por ID
- `POST /autores` — Cadastra novo autor
- `PUT /autores/:id` — Atualiza autor
- `DELETE /autores/:id` — Remove autor

## 🛠 Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
