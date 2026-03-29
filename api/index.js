const { Telegraf } = require('telegraf');
const bot = new Telegraf('8781887580:AAHfHL_PjwEQsq1EuciMqT7YzdYiARks3Ew');

module.exports = async (req, res) => {
  // Biar gak 404 kalau dibuka di browser (GET)
  if (req.method === 'GET') {
    return res.status(200).send('Webhook KamilShop Aktif 🚀');
  }

  // Handle data POST dari Pakasir
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      if (data.status === 'PAID') {
        const parts = data.external_id.split('-');
        const chatId = parts[parts.length - 1];

        if (chatId) {
          await bot.telegram.sendMessage(chatId, 
            `✅ *PEMBAYARAN BERHASIL!*\n\n` +
            `💰 *Total:* Rp${data.amount}\n` +
            `🔑 *Link APK:* [Klik Disini](https://t.me/kamil_premium/1)`,
            { parse_mode: 'Markdown' }
          );
        }
      }
      return res.status(200).send('OK');
    } catch (err) {
      console.error(err);
      return res.status(500).send('Error');
    }
  }
};
