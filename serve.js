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
