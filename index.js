const express = require('express');
const app = express();

app.use(express.json());

const produtos = [
  { id: 1, nome: 'Notebook', categoria: 'eletronicos', preco: 3500 },
  { id: 2, nome: 'Camiseta', categoria: 'roupas', preco: 59.9 },
  { id: 3, nome: 'Mouse', categoria: 'eletronicos', preco: 80 },
  { id: 4, nome: 'Calça Jeans', categoria: 'roupas', preco: 120 },
];

// Exercício 2
app.get('/produtos', (req, res) => {
  const { categoria } = req.query;

  if (categoria) {
    const filtrados = produtos.filter(
      p => p.categoria.toLowerCase() === categoria.toLowerCase()
    );
    return res.json(filtrados);
  }

  res.json(produtos);
});

// Exercício 1
app.get('/produtos/:id', (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  res.json(produto);
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});