/**
 * 
 * Package: fssys
 * Author: Ganesh B
 * Description: Npm module to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns
 * Install: npm i fssys --save
 * Github: https://github.com/ganeshkbhat/fssys
 * npmjs Link: https://www.npmjs.com/package/fssys
 * File: index.js
 * File Description: npm module to read write folder/files, fs util functions, traverse files and folder using code, or cli, or use glob patterns
 * 
*/
/* eslint no-console: 0 */

'use strict';

const tfs = require("traverse-fs");
const fsutils = require("./src/filesystem.js");
const fscommands = require("./src/commands.js");

module.exports = {
    fsutils,
    fscommands,
    ...tfs
};

