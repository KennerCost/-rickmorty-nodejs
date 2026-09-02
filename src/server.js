require('dotenv').config();
const app = require('./app');
const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }

  return 'localhost';
}

const PORT = process.env.PORT || 3000;
const IP = process.env.HOST_IP || getLocalIP();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Local: http://localhost:${PORT}`);
  console.log(`🌐 Rede:  http://${IP}:${PORT}`);
});