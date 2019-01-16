const fs = require('fs');
const path = require('path');

function getDate() {
  const d = new Date();
  return `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}`;
}

function createDir(rootPath, dirname) {
  const dirPath = path.join(rootPath, dirname);
  if (fs.existsSync(dirPath)) return;
  fs.mkdirSync(dirPath);
}

function createFile(dirPath, filename, content) {
  const filePath = path.join(dirPath, filename);
  const fileContent = content || '';
  if (fs.existsSync(filePath)) return;
  fs.writeFileSync(filePath, fileContent);
}

module.exports = { getDate, createDir, createFile }