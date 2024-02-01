const express = require('express');
const path = require('path');
const routes = require('./ROUTES/routes.notes');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.use('/api', routes)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});