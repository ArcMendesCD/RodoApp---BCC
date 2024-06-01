const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'senha',
    database: 'banco'
});

db.connect(err => {
    if(err){
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log("Conexão com sucesso!")
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() = path.extname(file.originalname));
    }
});

const upload = multer({storage});

app.post('/upload', upload.single('file'), (req, res) => {
    const tipoDocumento = req.body.tipoDocumento;
    const filePath = req.file.path;

    const query = 'INSERT INTO documentos (tipo, caminho) VALUES (?, ?)';
    db.query(uery, [tipoDocumento, filePath], (err, result) => {
        if (err){
            console.error('Erro ao inserir no banco de dados:', err);
            return res.status(500).send('Erro ao salvar o documento');
        }
        res.status(200).send('Documento salvo com sucesso')
    });
});

app.get('/documentos/:tipo', (req, res) => {
    const tipoDocumento = req.params.tipo;
    const query = 'SELECT * FROM documentos WHERE tipo = ?';
    db.query(query, [tipoDoxumento], (err, results) => {
        if (err) {
            console.error('Erro ao buscar documentos no banco de dados:', err);
            return res.status(500).send('Erro ao buscar documentos')
        }
        res.status(200).json(results);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.')
})