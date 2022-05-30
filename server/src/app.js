const express = require('express');
const app = express();
require('./db/conn');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/', require('./routes/propertyRoutes'));

app.listen(PORT, () => {
  console.log(`Connecion is live ar port ${PORT}`);
})