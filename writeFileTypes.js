const fs = require('fs');
const path = require('path');

const directory = './src/models';
const outputFilePath = './src/types/type-files.json';

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const fileNames = files.filter(file => fs.statSync(path.join(directory, file)).isFile());

  const adjustedFileNames = fileNames.map((file) => {
    return directory.concat('/'+ file);
  });

  const data = { typeFiles: adjustedFileNames };

  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(outputFilePath, jsonData, err => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }

    console.log('JSON file created successfully.');
  });
});