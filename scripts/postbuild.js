import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist', 'client');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Switching to the smaller index file as the potential entry point
const mainScript = '/assets/index-lIp6PP_2.js';
const mainStyles = '/assets/styles-UIFYZ0Xn.css';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Olive — The Safest Way to Shop for Groceries</title>
  <link rel="stylesheet" href="${mainStyles}">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="${mainScript}"></script>
</body>
</html>`;

fs.writeFileSync(indexPath, html);
console.log('Successfully updated index.html with potential correct entry point');
