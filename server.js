const express = require('express');
const app = express();

app.use(express.static('./dist/nodeyexpress'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/nodeyexpress/'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});