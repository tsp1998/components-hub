const http = require('http')
const fs = require('fs')
const path = require('path');

function formatHTML(html) {
  var tab = '\t';
  var result = '';
  var indent = '';

  html.split(/>\s*</).forEach(function (element) {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }

    result += indent + '<' + element + '>\r\n';

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += tab;
    }
  });

  return result.substring(1, result.length - 3);
}

function copyFolder(src = path.resolve(__dirname, '..', 'src', 'assets'), dest = path.resolve(__dirname, '..', 'components-html-files', 'assets')) {
  fs.readdir(dest, (err, files) => {
    if (err) return console.log('Error while reading directory')

    files.forEach(file => {
      if (fs.existsSync(path.resolve(dest, file))) {
        fs.unlinkSync(path.resolve(dest, file));
      }
    })
  });
  fs.readdir(src, (err, files) => {
    if (err) return console.log('Error while reading directory')

    files.forEach(file => {
      fs.copyFileSync(path.resolve(src, file), path.resolve(dest, file));
    })
  });
}

const server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const chunks = [];

  if (req.url === '/' && req.method === 'POST') {
    req.on('data', chunk => chunks.push(chunk))
    req.on('end', () => {
      const reqData = JSON.parse(Buffer.concat(chunks).toString('utf-8'))
      const { componentName, componentHTML } = reqData;

      /* html */
      const htmlString = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Component Library And Utils</title>
        </head>
        <body>
          ${componentHTML}
        </body>
        </html>
      `;

      fs.writeFileSync(path.resolve(__dirname, '..', 'components-html-files', `${componentName}.html`), formatHTML(htmlString.replace('http://localhost:3100', './assets')), 'utf-8');
      copyFolder();
    })
    res.end();
  }
})

server.listen(5000, (err) => {
  if (err) return console.log('error', err);
  console.log('Listening on Port 5000');
})