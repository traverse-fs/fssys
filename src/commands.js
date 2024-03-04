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
var cp = require('child_process')

/**
 *
 *
 * @param {*} [options={}]
 */
function genOptions(options = {}) {
  if (!(obj !== null && typeof obj === 'object' && !Array.isArray(obj))) throw new Error("Options should be an object");
  options["encoding"] = (options?.encoding) ? options?.encoding : "utf8";
  options["silent"] = (options?.silent) ? options?.silent : false;
  options = Object.assign({}, DEFAULTS, options)
  options["stdio"] = (options?.silent && !options?.stdio) ? options?.stdio : 'pipe';
}

/**
 *
 *
 * @param {*} cmd
 * @param {*} options
 * @return {*} 
 */
function execute(cmd, options) {
  options = genOptions(options);
  var error = null, stdout, stderr = '', code = 0, ok = true;
  try {
    stdout = cp.execSync(cmd, options);
  } catch (e) {
    error = e;
    stdout = e.stdout;
    stderr = e.stderr;
    code = e.status || 1;
    ok = false;
  }
  return { error, stdout, stderr, code, ok }
}

/**
 *
 *
 * @param {*} cmd
 * @param {*} args
 * @return {*} 
 */
function shellcmds(cmd, args) {
  return execute([cmd, ...args.splice(0, args.length - 2)].join(" "), args[0]);
}

/**
 *
 * 
 * Function composition is a way of 
 *    chaining multiple functions to create a new function. 
 *    It is a way of solving a problem 
 *    by reducing it into smaller solutions.
 * 
 * const compose = (f, g) => (args) => f(g(args)); // g(args) >>> f(result)
 * 
 * const compose = (f, g, h) => (args) => f(g(h(args))); // f(args) >>> g(result) >>> h(result)
 * 
 * @param {*} f
 * @param {*} g
 */
const compose = (f, g) => (args) => f(g(args));

/**
 *
 * 
 * The pipe is exactly the compose except, for one thing, 
 *    it works left to right. Let’s change our compose to a pipe
 * 
 * const pipe = (f, g) => (args) => h(g(args));  // g(args) >>> h(result)
 * 
 * const pipe = (f, g, h) => (args) => h(g(f(args))); // f(args) >>> g(result) >>> h(result)
 * 
 *
 * @param {*} f
 * @param {*} g
 */
const pipe = (f, g) => (args) => g(f(args));

// 
// Command Refs: https://www.javatpoint.com/linux-commands

function set(args) {
  return shellcmds("", args);
}

function ls(args) {
  return shellcmds("ls", args);
}

function sed(args) {
  return shellcmds("sed", args);
}

function tee(args) {
  return shellcmds("", args);
}

function tr(args) {
  return shellcmds("", args);
}

function wc(args) {
  return shellcmds("", args);
}

function od(args) {
  return shellcmds("", args);
}

function gzip(args) {
  return shellcmds("tar", args);
}

function gunzip(args) {
  return shellcmds("gunzip", args);
}

function locate(args) {
  return shellcmds("", args);
}

function date(args) {
  return shellcmds("", args);
}

function cal(args) {
  return shellcmds("", args);
}

function sleep(args) {
  return shellcmds("", args);
}

function time(args) {
  return shellcmds("", args);
}

function sort(args) {
  return shellcmds("sort", args);
}

function cat(args) {
  return shellcmds("", args);
}

function zcat(args) {
  return shellcmds("", args);
}

function rm(args) {
  return shellcmds("rm", args);
}

function mv(args) {
  return shellcmds("mv", args);
}

async function cpFileNode(args) {
  await fs.copyFile(arsg[0], arsg[1], arsg[2]);
}

async function cpNode(args) {
  await fs.cp(arsg[0], arsg[1], arsg[2]);
}

function cp(args) {
  return shellcmds("mv", args);
}

function df(args) {
  return shellcmds("", args);
}

function mount(args) {
  return shellcmds("", args);
}

function exit(args) {
  return shellcmds("", args);
}

function clear(args) {
  return shellcmds("clear", args);
}

function ip(args) {
  return shellcmds("ipconfig", args);
}

function ssh(args) {
  return shellcmds("ssh", args);
}

function mail(args) {
  return shellcmds("", args);
}

function ping(args) {
  return shellcmds("ping", args);
}

function mkdir(args) {
  return shellcmds("mkdir", args);
}

function rmdir(args) {
  return shellcmds("rmdir", args);
}

function rename(args) {
  return shellcmds("", args);
}

function head(args) {
  return shellcmds("head", args);
}

function tail(args) {
  return shellcmds("tail", args);
}

function host(args) {
  return shellcmds("host", args);
}

function grep(args) {
  return shellcmds("grep", args);
}

function comm(args) {
  return shellcmds("", args);
}

function find(args) {
  return shellcmds("", args);
}

function echo(args) {
  return shellcmds("echo", args);
}

function popd(args) {
  return shellcmds("popd", args);
}

function pushd(args) {
  return shellcmds("pushd", args);
}

function chmod(args) {
  return shellcmds("chmod", args);
}

function cd(args) {
  return shellcmds("cd", args);
}

function touch(args) {
  return shellcmds("touch", args);
}

function whoami(args) {
  return shellcmds("whoami", args);
}

function ln(args) {
  return shellcmds("ln", args);
}

function pwd(args) {
  return shellcmds("pwd", args);
}

function tac(args) {
  return shellcmds("", args);
}

function more(args) {
  return shellcmds("", args);
}

function less(args) {
  return shellcmds("", args);
}

function su(args) {
  return shellcmds("su", args);
}

function id(args) {
  return shellcmds("", args);
}

function useradd(args) {
  return shellcmds("", args);
}

function groupadd(args) {
  return shellcmds("", args);
}

function cut(args) {
  return shellcmds("", args);
}

function passwd(args) {
  return shellcmds("passwd", args);
}

function pwd(args) {
  return shellcmds("pwd", args);
}

function tempdir(args) {
  return shellcmds("", args);
}

function uniq(args) {
  return shellcmds("", args);
}

function which(args) {
  return shellcmds("which", args);
}

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
module.exports.cpFileNode = Object.assign(cpFileNode.prototype, to);
module.exports.cpNode = Object.assign(cpNode.prototype, to);
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

module.exports.compose = compose;
module.exports.pipe = pipe;

