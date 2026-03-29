const { Telegraf } = require('telegraf');

const bot = new Telegraf('TOKEN_BOT_KAMU');

module.exports = async (req, res) => {
  // Hanya proses jika ada data POST dari Pakasir
  if (req.method === 'POST') {
    const data = req.body;

    // Pastikan statusnya PAID dan ada external_id
    if (data.status === 'PAID' && data.external_id) {
      
      // Ambil Chat ID (angka terakhir setelah tanda -)
      const parts = data.external_id.split('-');
      const chatId = parts[parts.length - 1];

      try {
        await bot.telegram.sendMessage(chatId, 
          `✅ *PEMBAYARAN BERHASIL!*\n\n` +
          `📦 *Produk:* APK Premium (Test)\n` +
          `💰 *Total:* Rp${data.amount}\n\n` +
          `🔑 *Link Download:* [Klik Disini](https://t.me/your_channel/123)`, 
          { parse_mode: 'Markdown' }
        );
        return res.status(200).send('OK');
      } catch (err) {
        return res.status(500).send('Bot Error');
      }
    }
    return res.status(200).send('Data not valid');
  }

  // Jika diakses lewat browser (GET)
  res.status(200).send('Webhook Active 🚀');
};
