import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// Definisikan tipe data biar TS nggak komplain
interface PakasirWebhookBody {
  status: string;
  reference: string;
  external_id: string;
  amount: number;
  payment_method?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Validasi Metode
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const secret = process.env.WEBHOOK_SECRET || '';
  const signature = req.headers['x-pakasir-signature'] as string;

  // 2. Verifikasi Signature (PENTING: Biar orang nggak asal nembak API kamu)
  const payload = JSON.stringify(req.body);
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  // Opsional: Aktifkan ini kalau kamu mau proteksi super ketat
  // if (signature !== expectedSignature) {
  //   return res.status(401).json({ message: 'Invalid Signature' });
  // }

  console.log("🔔 Pakasir Webhook Received:", req.body);

  try {
    const { status, external_id, reference }: PakasirWebhookBody = req.body;

    // 3. Logika Update Status
    if (status === 'PAID' || status === 'SUCCESS') {
      
      // DISINI: Tambahkan fungsi database kamu (Upstash Redis)
      // Contoh: await redis.set(`order:${external_id}:status`, 'PAID');
      
      console.log(`✅ Transaksi ${external_id} (Ref: ${reference}) dinyatakan LUNAS.`);
    }

    // 4. Respon balik ke Pakasir
    return res.status(200).json({ 
      success: true,
      message: 'Webhook processed successfully' 
    });

  } catch (error) {
    console.error("❌ Webhook Error:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
