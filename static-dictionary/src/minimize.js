import path from 'path';
import fs from 'fs';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'data');
const destDir = path.join(__dirname, '..', '..', 'public', 'suggested-dictionary');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

files.forEach(file => {
  if (path.extname(file) === '.json') {
    const filePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);

    // Прочитати та парснути JSON
    const data = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(data);

    // Мінімізувати та записати
    fs.writeFileSync(destPath, JSON.stringify(json), 'utf-8');
  }
});

console.log('JSON файли мінімізовані та скопійовані!');
