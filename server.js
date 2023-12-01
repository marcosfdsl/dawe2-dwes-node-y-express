const express = require('express');
const app = express();

app.use(express.static('./dist/tu-proyecto-angular'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/tu-proyecto-angular/'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});