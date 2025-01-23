import path from 'node:path'
import { mkdir } from 'node:fs/promises'

export async function emkdir(relativePath) {
  try {
    // Konversi path relatif menjadi path absolut berdasarkan root direktori
    const absolutePath = path.resolve(process.cwd(), relativePath)
    const createDir = await mkdir(absolutePath, { recursive: true })

    console.log(`Direktori berhasil dibuat: ${absolutePath}`)
    return absolutePath
  } catch (err) {
    console.error(`Gagal membuat direktori: ${err.message}`)
    throw err
  }
}
