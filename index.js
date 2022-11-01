/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: Nnpm module to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns
 * Install: npm i fssys
 * Github: https://github.com/ganeshkbhat/fssys
 * npmjs Link: 
 * File: index.js
 * File Description: npm module to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns
 * 
*/
/* eslint no-console: 0 */

'use strict';
const tfs = require("traverse-fs");
const fsutils = require("./src/filesystem.js");

module.exports = {
    fsutils,
    ...tfs
};

