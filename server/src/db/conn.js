const mongoose = require('mongoose');
// const CONNECTION_URL = 'mongodb+srv://ioabhishek:ioabhishek123@cluster0.r2osl.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(CONNECTION_URL)
mongoose.connect('mongodb://localhost:27017/add-property')
.then(() => {
  console.log('Connection is successfull');
}).catch((e) => {
  console.log('No Connection');
});