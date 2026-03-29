import { NextResponse } from 'next/server'
// Import redis atau database kamu di sini
// import { redis } from '@/lib/redis' 

export async function GET() {
  try {
    // Contoh ambil data dari Redis, ganti sesuai DB kamu
    // const isMaintenance = await redis.get('maintenance_mode') === 'true'
    const isMaintenance = false // Default
    
    return NextResponse.json({ success: true, isMaintenance })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const { enabled } = await req.json()
    
    // Simpan status ke Redis/DB
    // await redis.set('maintenance_mode', enabled ? 'true' : 'false')
    
    console.log(`[KAMILS SHOP] Maintenance mode set to: ${enabled}`)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
