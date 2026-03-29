const { Telegraf } = require('telegraf');
const bot = new Telegraf('TOKEN_BOT_KAMU');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log("Data Pakasir:", data);
    
    // Logika kirim pesan ke user...
    
    return res.status(200).send('OK');
  }
  
  // Kalau diakses lewat browser (GET) supaya tidak 404
  res.status(200).send('Webhook KamilShop Aktif 🚀');
};
