const http = require("http");
const fs = require("fs");
const path = require("path");

const distDir = "C:/Users/gianc/Documents/Devin Proyectos/PartnerShip/apexstart/dist";
const port = 3000;

const mimeTypes = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

const server = http.createServer((req, res) => {
  let url = req.url;
  if (url === "/") url = "/index.html";

  const decoded = decodeURIComponent(url);
  const normalized = decoded.replace(/\\/g, "/").replace(/^\/+/, "");

  if (normalized.includes("..") || normalized.includes(":")) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  const filePath = path.join(distDir, normalized);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found: " + filePath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

setInterval(() => {}, 1000 * 60);
