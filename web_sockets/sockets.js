const wss = new WebSocket.Server({ server }); 
function runWebSocket(){
const WebSocket = require('ws');
wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`); 
  });

  ws.send('👋 Welcome to WebSocket server!');
});
};