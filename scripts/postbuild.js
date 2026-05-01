import fs from 'fs';
import path from 'path';

const distPath = path.join(process.cwd(), 'dist', 'client');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Olive — The Safest Way to Shop for Groceries</title>
</head>
<body>
  <div id="root"></div>
  <script type="module">
    // Dynamically find the entry point
    const scripts = ['/assets/index-lIp6PP_2.js', '/assets/index-DMaieEr_.js'];
    scripts.forEach(s => {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = s;
      document.body.appendChild(script);
    });
  </script>
</body>
</html>`;

fs.writeFileSync(indexPath, html);
console.log('Successfully created index.html in dist/client');
