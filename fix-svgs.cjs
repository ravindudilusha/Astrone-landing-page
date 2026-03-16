const fs = require('fs');
const path = require('path');
const dir = 'src/imports';

// Handle completely missing files specifically requested
const missing = ['svg-cl4db4kgk2.ts', 'svg-bqnj0lvji2.ts', 'svg-ytr8brh293.ts'];
missing.forEach(m => {
  const p = path.join(dir, m);
  if (!fs.existsSync(p)) {
    fs.writeFileSync(p, 'export default new Proxy({}, { get: () => "" }) as Record<string, string>;\n');
  }
});

// Update all svg-*.ts files
const files = fs.readdirSync(dir);
files.forEach(file => {
  if (file.startsWith('svg-') && file.endsWith('.ts')) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // Only process if it hasn't been casted yet
    if (!content.includes('as Record<string, string>')) {
      if (content.includes('Empty SVG paths') || content.trim() === 'export default {}') {
        content = 'export default new Proxy({}, { get: () => "" }) as Record<string, string>;\n';
      } else {
        // Find the last closing brace and append the cast
        content = content.replace(/}([\s\r\n]*)$/, '} as Record<string, string>;\n');
      }
      fs.writeFileSync(p, content);
      console.log(`Updated ${file}`);
    }
  }
});
