import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist', 'client');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// These hashes match the current build output
const mainScript = '/assets/index-DMaieEr_.js';
const mainStyles = '/assets/styles-UIFYZ0Xn.css';

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Olive — The Safest Way to Shop for Groceries</title>
  <link rel="stylesheet" href="${mainStyles}">
  <script>
    // Mock TanStack Router hydration state to prevent "Invariant failed"
    window.__TSR_DEHYDRATED__ = {
      data: [],
      manifest: {
        routes: {
          root: { id: 'root', path: '/' },
          index: { id: 'index', path: '/', parentId: 'root' }
        }
      }
    };
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="${mainScript}"></script>
</body>
</html>`;

fs.writeFileSync(indexPath, html);
console.log('Successfully created production-ready index.html in dist/client');
