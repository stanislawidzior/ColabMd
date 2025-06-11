const express = require('express');
const http = require('http');
const path = require('path');
const auth = require('./routes/auth.js')
const app = express();
const server = http.createServer(app); 

app.use(express.json());
app.use('/auth', auth)
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));

});




const PORT = 3000;
server.listen(PORT, () => {
  console.log(` erver running on http://localhost:${PORT}`);
});
