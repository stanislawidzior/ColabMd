const express = require('express');
const http = require('http');
const path = require('path');
const auth = require('./routes/auth.js')
const protected = require('./routes/protected.js')
const app = express();
const server = http.createServer(app); 

app.use(express.json());
app.use('/', auth)
app.use("/", protected)
app.use(express.static(path.join(__dirname, 'public')));





const PORT = 3000;
server.listen(PORT, () => {
  console.log(` erver running on http://localhost:${PORT}`);
});
