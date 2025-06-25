const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const files = fs.readdirSync(videosDir);

console.log('🎬 Starting video optimization...\n');

// Create optimized directory
const optimizedDir = path.join(videosDir, 'optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

files.forEach(file => {
  if ((file.endsWith('.mp4') || file.endsWith('.mov')) && !file.includes('optimized')) {
    const input = path.join(videosDir, file);
    const output = path.join(optimizedDir, `${path.parse(file).name}-optimized.mp4`);
    
    // Get file size in MB
    const stats = fs.statSync(input);
    const fileSizeInMB = stats.size / (1024 * 1024);
    
    console.log(`📹 Processing ${file} (${fileSizeInMB.toFixed(2)}MB)...`);
    
    // Aggressive compression for files > 2MB
    const crf = fileSizeInMB > 2 ? 32 : 28;
    
    const command = `ffmpeg -i "${input}" -c:v libx264 -crf ${crf} -preset fast -c:a aac -b:a 96k -movflags +faststart -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" -y "${output}"`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Error optimizing ${file}:`, error.message);
        return;
      }
      
      const newStats = fs.statSync(output);
      const newSizeInMB = newStats.size / (1024 * 1024);
      const reduction = ((fileSizeInMB - newSizeInMB) / fileSizeInMB * 100).toFixed(1);
      
      console.log(`✅ ${file} optimized: ${fileSizeInMB.toFixed(2)}MB → ${newSizeInMB.toFixed(2)}MB (${reduction}% reduction)`);
      
      // Replace original with optimized if successful
      if (newSizeInMB < 2.5) {
        fs.copyFileSync(output, input);
        console.log(`✅ Replaced ${file} with optimized version`);
      }
    });
  }
});