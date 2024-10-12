require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const { success, getUniqueId } = require('./helper.js');
const cors = require('cors');
const path = require('path');

let mangas = require('./mock-mangas');
const authRoutes = require('./auth.js');

const app = express();
const port = process.env.PORT || 3000; // Utiliser la variable d'environnement PORT

app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST'],         
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app
  .use(favicon(__dirname + '/favicon.ico'))
  .use(morgan('dev'));

// Anilist API
app.use(authRoutes);

// MY API
app.get('/', (req, res) => {
  res.json({ message: 'Hello Randy, this message is from express js' });
});

app.get('/api/mangas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const manga = mangas.find(manga => manga.id === id);
  const message = "Un manga en particulier a été bien trouvé";
  res.json(success(message, manga));
});

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
  const id = getUniqueId(mangas);
  const mangasCreated = { ...req.body, id: id };
  mangas.push(mangasCreated);
  const message = `Le manga ${mangasCreated.title} a bien été créé`;
  res.json(success(message, mangasCreated));
});

// Démarrer le serveur
app.listen(port, () => console.log(`Application running on server: http://localhost:${port}`));
