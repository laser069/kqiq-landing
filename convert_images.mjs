import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
      const ext = path.extname(entry.name);
      const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      
      console.log(`Converting: ${entry.name}...`);
      
      try {
        await sharp(fullPath)
          .webp({ quality: 80, effort: 6 }) // Convert to webp with good quality/compression ratio
          .toFile(webpPath);
          
        const oldSize = (await fs.stat(fullPath)).size;
        const newSize = (await fs.stat(webpPath)).size;
        
        console.log(`Success: ${entry.name} -> ${(oldSize/1024/1024).toFixed(2)}MB to ${(newSize/1024/1024).toFixed(2)}MB (${Math.round((1 - newSize/oldSize) * 100)}% saved)`);
        
        // Remove original file
        await fs.unlink(fullPath);
        console.log(`Deleted original: ${entry.name}`);
      } catch (err) {
        console.error(`Failed to convert ${entry.name}:`, err);
      }
    }
  }
}

async function main() {
  console.log("Starting Image Optimization...");
  await processDirectory(PUBLIC_DIR);
  console.log("Finished converting public directory images to modern WebP.");
}

main().catch(console.error);
