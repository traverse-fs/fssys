/**
 * 
 * Package: fssys
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i fssys --save
 * Github: https://github.com/traverse-fs/fssys
 * npmjs Link: https://www.npmjs.com/package/fssys
 * File: src/filesystem.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const path = require('path');
const fs = require('fs');

/**
 *
 *
 * @param {*} module_name
 * @return {*} 
 */
function _getRequireOrImport(module_name) {
    if (process.versions.node.split('.')[0] > "14") {
        return import(module_name);
    }
    return require(module_name);
}

/**
 *
 *
 * @param {*} mod
 * @return {*} 
 */
function _isinbuilt(mod) {
    const { isBuiltin } = _getRequireOrImport("module");
    return isBuiltin(mod);
}

/**
 *
 *
 * @param {*} localGitDir
 */
function _createFolders(localGitDir) {
    return new Promise(function (resolve, reject) {
        try {
            return fs.access(path.join(localGitDir), (e) => {
                resolve(fs.mkdirSync(localGitDir, { recursive: true }));
            })
        } catch (err) {
            throw new Error("[require-urls]: filesystem.js: file access error", err.toString());
        }
    })
}

/**
 *
 *
 * @param {*} localPath
 * @param {*} data
 * @return {*} 
 * 
 * Consider: 
 * streamsaver - https://www.npmjs.com/package/streamsaver
 * file-saver - https://www.npmjs.com/package/file-saver
 * 
 */
async function _writeFile(localPath, data, options) {
    return new Promise(async function (resolve, reject) {
        try {
            options.logger("[require-urls]: filesystem.js: Writing fetched file to .jscache");
            console.log(localPath);
            if (!localPath) {
                var createStream = fs.createWriteStream(localPath);
                createStream.end();
            }
            await fs.promises.writeFile(localPath, data.toString());
            options.logger("[require-urls]: filesystem.js: Written fetched file to .jscache");
            resolve(true);
        } catch (e) {
            throw new Error("[require-urls]: filesystem.js: ", e.toString());
        }
    })

    // try {
    //     options.logger("[require-urls]: filesystem.js: Writing fetched file to .jscache", localPath);

    //     // if (!localPath) {
    //     //     var createStream = fs.createWriteStream(localPath);
    //     //     createStream.end();
    //     // }
    //     await fs.promises.writeFile(localPath, data.toString());
    //     options.logger("[require-urls]: filesystem.js: Written fetched file to .jscache");
    //     return true;
    // } catch (e) {
    //     throw new Error("[require-urls]: filesystem.js: ", e.toString());
    // }
}

function _registerNodeCache(localGitFileCacheUrl, options) { } // ? Needed?

module.exports._isinbuilt = _isinbuilt;
module.exports._createFolders = _createFolders;
module.exports._writeFile = _writeFile;
module.exports._registerNodeCache = _registerNodeCache;
