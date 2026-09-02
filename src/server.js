require('dotenv').config();

const os = require('os');
const app = require('./app');

function getLocalIP() {
  const ignoredAdapters = /(wsl|docker|vethernet|virtualbox|vmware|loopback)/i;
  const preferredAdapters = /(wi-?fi|wlan|ethernet|local area connection)/i;
  const addresses = [];

  for (const [name, nets] of Object.entries(os.networkInterfaces())) {
    if (ignoredAdapters.test(name)) continue;

    for (const net of nets) {
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push({ name, address: net.address });
      }
    }
  }

  return (
    addresses.find((item) => preferredAdapters.test(item.name))?.address ||
    addresses[0]?.address ||
    'localhost'
  );
}

const PORT = process.env.PORT || 3000;
const IP = process.env.HOST_IP || getLocalIP();

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Local:    http://localhost:${PORT}`);
  console.log(`Network:  http://${IP}:${PORT}`);
  console.log(`Emulator: http://10.0.2.2:${PORT}`);
});
