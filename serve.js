// const express = require('express');
// const multer = require('multer');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');


// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'usuario',
//     password: 'senha',
//     database: 'banco'
// });

// db.connect(err => {
//     if(err){
//         console.error('Erro ao conectar ao banco de dados:', err);
//         return;
//     }
//     console.log("Conexão com sucesso!")
// })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() = path.extname(file.originalname));
//     }
// });

// const upload = multer({storage});

// app.post('/upload', upload.single('file'), (req, res) => {
//     const tipoDocumento = req.body.tipoDocumento;
//     const filePath = req.file.path;

//     const query = 'INSERT INTO documentos (tipo, caminho) VALUES (?, ?)';
//     db.query(uery, [tipoDocumento, filePath], (err, result) => {
//         if (err){
//             console.error('Erro ao inserir no banco de dados:', err);
//             return res.status(500).send('Erro ao salvar o documento');
//         }
//         res.status(200).send('Documento salvo com sucesso')
//     });
// });

// app.get('/documentos/:tipo', (req, res) => {
//     const tipoDocumento = req.params.tipo;
//     const query = 'SELECT * FROM documentos WHERE tipo = ?';
//     db.query(query, [tipoDoxumento], (err, results) => {
//         if (err) {
//             console.error('Erro ao buscar documentos no banco de dados:', err);
//             return res.status(500).send('Erro ao buscar documentos')
//         }
//         res.status(200).json(results);
//     });
// });

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000.')
// })
// server.js
const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'documentos_db'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const tipoDocumento = req.body.tipoDocumento;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = file.path;
  const fileData = fs.readFileSync(filePath);
  const fileName = file.originalname;

  connection.query(
    'INSERT INTO documentos (nome, tipo, dados) VALUES (?, ?, ?)',
    [fileName, tipoDocumento, fileData],
    (err, results) => {
      if (err) {
        console.error('Error inserting file into database: ', err);
        return res.status(500).send('Error uploading file.');
      }
      res.send('File uploaded successfully.');
    }
  );
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
