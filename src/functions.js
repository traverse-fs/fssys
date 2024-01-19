/**
 * 
 * Package: fssys
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i fssys --save
 * Github: https://github.com/traverse-fs/fssys
 * npmjs Link: https://www.npmjs.com/package/fssys
 * File: src/functions.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

export function copyFile(file, newDir) {
  // //example, copy file1.htm from 'test/dir_1/' to 'test/'
  // copyFile('./test/dir_1/file1.htm', './test/');
  //include the fs, path modules
  return new Promise((resolve, reject) => {
    var fs = require('fs');
    var path = require('path');
    var f = path.basename(file);
    var source = fs.createReadStream(file);
    var dest = fs.createWriteStream(path.resolve(newDir, f));
    source.pipe(dest);
    source.on('end', () => {
      console.log('Succesfully copied');
      resolve(true);
    });
    source.on('error', (err) => {
      console.log(err);
      reject(false);
    });
  });
};

export function moveFile(file, newDir) {
  // //move file1.htm from 'test/' to 'test/dir_1/'
  // moveFile('./test/file1.htm', './test/dir_1/');
  var fs = require('fs');
  var path = require('path');
  var f = path.basename(file);
  var dest = path.resolve(newDir, f);
  return fs.renameSync(file, dest);
};

export function renameFile(file, newDir) {
  var fs = require('fs');
  var path = require('path');
  var f = path.basename(file);
  var dest = path.resolve(newDir, f);
  return fs.renameSync(f, dest);
}

export function getCurrentDirFilenames() {
  const { dirname } = !!require ? require('path') : import('path');
  const { fileURLToPath } = !!require ? require('path') : import('url');
  const __dirname = __dirname || dirname(fileURLToPath(import.meta.url));
  return fs.readdirSync(dir)
    // .forEach(file => {
    //   console.log(file);
    // });
}

export default {
  getCurrentDirFiles: getCurrentDirFilenames,
  rename: renameFile,
  move: moveFile,
  copy: copyFile
}