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
function to(args) { }

// Command Refs: https://www.javatpoint.com/linux-commands
function set(args) { }
function ls(args) { }
function sed(args) { }
function tee(args) { }
function tr(args) { }
function wc(args) { }
function od(args) { }
function gzip(args) { }
function gunzip(args) { }
function locate(args) { }
function date(args) { }
function cal(args) { }
function sleep(args) { }
function time(args) { }
function sort(args) { }
function cat(args) { }
function zcat(args) { }
function rm(args) { }
function mv(args) { }
function cp(args) { }
function df(args) { }
function mount(args) { }
function exit(args) { }
function clear(args) { }
function ip(args) { }
function ssh(args) { }
function mail(args) { }
function ping(args) { }
function mkdir(args) { }
function rmdir(args) { }
function rename(args) { }
function head(args) { }
function tail(args) { }
function host(args) { }
function grep(args) { }
function comm(args) { }
function find(args) { }
function echo(args) { }
function popd(args) { }
function pushd(args) { }
function chmod(args) { }
function cd(args) { }
function touch(args) { }
function whoami(args) { }
function ln(args) { }
function pwd(args) { }
function tac(args) { }
function more(args) { }
function less(args) { }
function su(args) { }
function id(args) { }
function useradd(args) { }
function groupadd(args) { }
function cut(args) { }
function passwd(args) { }
function tempdir(args) { }
function uniq(args) { }
function which(args) { }


module.exports.set = Object.assign(set.prototype, to);
module.exports.ls = Object.assign(ls.prototype, to);
module.exports.sed = Object.assign(sed.prototype, to);
module.exports.tee = Object.assign(tee.prototype, to);
module.exports.tr = Object.assign(tr.prototype, to);
module.exports.wc = Object.assign(wc.prototype, to);
module.exports.od = Object.assign(od.prototype, to);
module.exports.gzip = Object.assign(gzip.prototype, to);
module.exports.gunzip = Object.assign(gunzip.prototype, to);
module.exports.locate = Object.assign(locate.prototype, to);
module.exports.date = Object.assign(date.prototype, to);
module.exports.cal = Object.assign(cal.prototype, to);
module.exports.sleep = Object.assign(sleep.prototype, to);
module.exports.time = Object.assign(time.prototype, to);
module.exports.sort = Object.assign(sort.prototype, to);
module.exports.cat = Object.assign(cat.prototype, to);
module.exports.zcat = Object.assign(zcat.prototype, to);
module.exports.rm = Object.assign(rm.prototype, to);
module.exports.mv = Object.assign(mv.prototype, to);
module.exports.cp = Object.assign(cp.prototype, to);
module.exports.df = Object.assign(df.prototype, to);
module.exports.mount = Object.assign(mount.prototype, to);
module.exports.exit = Object.assign(exit.prototype, to);
module.exports.clear = Object.assign(clear.prototype, to);
module.exports.ip = Object.assign(ip.prototype, to);
module.exports.ssh = Object.assign(ssh.prototype, to);
module.exports.mail = Object.assign(mail.prototype, to);
module.exports.ping = Object.assign(ping.prototype, to);
module.exports.mkdir = Object.assign(mkdir.prototype, to);
module.exports.rmdir = Object.assign(rmdir.prototype, to);
module.exports.rename = Object.assign(rename.prototype, to);
module.exports.head = Object.assign(head.prototype, to);
module.exports.tail = Object.assign(tail.prototype, to);
module.exports.host = Object.assign(host.prototype, to);
module.exports.grep = Object.assign(grep.prototype, to);
module.exports.comm = Object.assign(comm.prototype, to);
module.exports.find = Object.assign(find.prototype, to);
module.exports.echo = Object.assign(echo.prototype, to);
module.exports.popd = Object.assign(popd.prototype, to);
module.exports.pushd = Object.assign(pushd.prototype, to);
module.exports.chmod = Object.assign(chmod.prototype, to);
module.exports.cd = Object.assign(cd.prototype, to);
module.exports.touch = Object.assign(touch.prototype, to);
module.exports.whoami = Object.assign(whoami.prototype, to);
module.exports.ln = Object.assign(ln.prototype, to);
module.exports.pwd = Object.assign(pwd.prototype, to);
module.exports.tac = Object.assign(tac.prototype, to);
module.exports.more = Object.assign(more.prototype, to);
module.exports.less = Object.assign(less.prototype, to);
module.exports.su = Object.assign(su.prototype, to);
module.exports.id = Object.assign(id.prototype, to);
module.exports.useradd = Object.assign(useradd.prototype, to);
module.exports.groupadd = Object.assign(groupadd.prototype, to);
module.exports.cut = Object.assign(cut.prototype, to);
module.exports.passwd = Object.assign(passwd.prototype, to);
module.exports.tempdir = Object.assign(tempdir.prototype, to);
module.exports.uniq = Object.assign(uniq.prototype, to);
module.exports.which = Object.assign(which.prototype, to);

