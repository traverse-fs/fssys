/**
 * 
 * Package: fssys
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i fssys --save
 * Github: https://github.com/traverse-fs/fssys
 * npmjs Link: https://www.npmjs.com/package/fssys
 * File: src/commands.js
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const path = require('path');
const fs = require('fs');
var exec = require('shelljs.exec');


// Write mixing for pipe function "to" to apply to all below methods
function to() {}

function set(args) {} 
function ls(args) {} 
function sed(args) {} 
function sort(args) {} 
function cat(args) {} 
function rm(args) {} 
function mv(args) {} 
function cp(args) {} 
function mkdir(args) {} 
function grep(args) {} 
function find(args) {} 
function echo(args) {} 
function popd(args) {} 
function pushd(args) {} 
function chmod(args) {} 
function cd(args) {} 
function touch(args) {} 
function whoami(args) {} 
function ln(args) {} 
function pwd(args) {} 
function tail(args) {} 
function tempdir(args) {} 
function uniq(args) {} 
function which(args) {}

module.exports.set = set;
module.exports.ls = ls;
module.exports.sed = sed;
module.exports.sort = sort;
module.exports.cat = cat;
module.exports.rm = rm;
module.exports.mv = mv;
module.exports.cp = cp;
module.exports.mkdir = mkdir;
module.exports.grep = grep;
module.exports.find = find;
module.exports.echo = echo;
module.exports.popd = popd;
module.exports.pushd = pushd;
module.exports.chmod = chmod;
module.exports.cd = cd;
module.exports.touch = touch;
module.exports.whoami = whoami;
module.exports.ln = ln;
module.exports.pwd = pwd;
module.exports.tail = tail;
module.exports.tempdir = tempdir;
module.exports.uniq = uniq;
module.exports.which = which;

