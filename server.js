const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { success, getUniqueId } = require('./helper.js')
const cors = require('cors')
const path = require('path')


let mangas = require('./mock-mangas')
const authRoutes = require('./auth.js');

const app = express()
const port = 3000

app.use(express.static('public')); 

app.use(cors({
  origin: 'https://vue-mangas-typescript-two.onrender.com', 
  methods: ['GET', 'POST'],         
}));


app.use(express.json())


app.get('/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const imagePath = path.join(__dirname, 'images', filename);


  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send('Image not found');
    }

    const ext = path.extname(filename).toLowerCase();

    let mimeType;
    switch (ext) {
      case '.png':
        mimeType = 'image/png';
        break;
      case '.jpg':
      case '.jpeg':
        mimeType = 'image/jpeg';
        break;
      case '.gif':
        mimeType = 'image/gif';
        break;
      case '.webp':
        mimeType = 'image/webp';
        break;
      default:
        return res.status(400).send('Unsupported image format');
    }

    sharp(imagePath)
      .toBuffer()
      .then((data) => {
        res.type(mimeType); 
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send('Error processing image');
      });
  });
});


app
  .use(favicon(__dirname + '/favicon.ico'))
  .use(morgan('dev'))

// Anilist API
app.use(authRoutes)


//MY API
app.get('/', (req, res) => {
  res.json({ message: 'Hello Randy, this message is from express js' });
});

app.get('/api/mangas/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const manga = mangas.find(manga => manga.id === id)
  const message = "Un manga en particulier a été bien trouvé"
  res.json(success(message, manga))
})

app.get('/api/mangas', (req, res) => {
  const message = "La liste de tous les mangas disponibles sur le marché";
  
  const response = {
    success: true, 
    message: message,
    data: mangas
  };

  res.json(response);
});

app.post('/api/mangas', (req, res) => {
  const id = getUniqueId(mangas)
  const mangasCreadted = { ...req.body, ...{ id: id, created_at: today.toLocaleDateString("fr-FR", options) } }
  mangas.push(mangasCreadted)
  const message = `Le manga ${mangasCreadted} a bien été crée`
  res.json(success(message, mangasCreadted))
})

app.listen(port, () => console.log(`Application running on server : http://localhost:${port}`))


