const express = require ('express');
const server = express();

server.use(express.json());

const cursos = ['Criar', 'Excluir', 'Manter'];

//Retorna uma Tarefa
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

//Retorna todas as tarefas
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Criar uma nova tarefa
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

//Atualizar uma tarefa
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos [index] = name;
    return res.json(cursos);
});

// Deletar uma tarefa
server.delete('/cursos/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1)
    return res.json({message: "A tarefa foi deletada"});

});
server.listen(3000)