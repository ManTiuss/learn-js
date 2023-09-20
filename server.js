const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const { extname, join } = require('node:path');

const server = createServer((req, res) => {
  // Отримуємо шлях запиту користувача
  const filePath = req.url === '/' ? 'index.html' : req.url.slice(1);

  // Визначаємо розширення файлу
  const fileExt = extname(filePath);

  // Визначаємо MIME-тип для відповіді
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
  }[fileExt] || 'application/octet-stream';

  // Складаємо шлях до файлу на сервері
  const fullPath = join(__dirname, filePath);

  readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Файл не знайдено (404)
        readFile(join(__dirname, '404.html'), (err, errorPage) => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(errorPage);
          }
        });
      } else {
        // Інша помилка сервера (500)
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    } else {
      // Файл успішно зчитано, відправляємо його клієнту
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
