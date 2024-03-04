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
const os = require("os");
var cp = require('child_process')

var SYSTEM = os.platform;

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
function bash(cmd, args) {
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
  return bash("set", args);
}

function ls(args) {
  return bash("ls", args);
}

function sed(args) {
  return bash("sed", args);
}

function tee(args) {
  return bash("", args);
}

function tr(args) {
  return bash("tr", args);
}

function wc(args) {
  return bash("wc", args);
}

function od(args) {
  return bash("", args);
}

function gzip(args) {
  return bash("gzip", args);
}

function tar(args) {
  return bash("tar", args);
}

function gunzip(args) {
  return bash("gunzip", args);
}

function locate(args) {
  return bash("", args);
}

function date(args) {
  return bash("", args);
}

function cal(args) {
  return bash("", args);
}

function sleep(args) {
  return bash("sleep", args);
}

function time(args) {
  return bash("", args);
}

function sort(args) {
  return bash("sort", args);
}

function cat(args) {
  return bash("cat", args);
}

function zcat(args) {
  return bash("zcat", args);
}

function rm(args) {
  return bash("rm", args);
}

function mv(args) {
  return bash("mv", args);
}

async function cpFileNode(args) {
  await fs.copyFile(arsg[0], arsg[1], arsg[2]);
}

async function cpNode(args) {
  await fs.cp(arsg[0], arsg[1], arsg[2]);
}

function cp(args) {
  return bash("cp", args);
}

function df(args) {
  return bash("", args);
}

function mount(args) {
  return bash("mount", args);
}

function exit(args) {
  return bash("exit", args);
}

function clear(args) {
  return bash("clear", args);
}

function ip(args) {
  return bash("ipconfig", args);
}

function ssh(args) {
  return bash("ssh", args);
}

function mail(args) {
  return bash("", args);
}

function ping(args) {
  return bash("ping", args);
}

function mkdir(args) {
  return bash("mkdir", args);
}

function rmdir(args) {
  return bash("rmdir", args);
}

function rename(args) {
  return bash("", args);
}

function head(args) {
  return bash("head", args);
}

function tail(args) {
  return bash("tail", args);
}

function top(args) {
  return bash("top", args);
}

function host(args) {
  return bash("host", args);
}

function grep(args) {
  return bash("grep", args);
}

function comm(args) {
  return bash("", args);
}

function find(args) {
  return bash("", args);
}

function echo(args) {
  return bash("echo", args);
}

function popd(args) {
  return bash("popd", args);
}

function pushd(args) {
  return bash("pushd", args);
}

function chmod(args) {
  return bash("chmod", args);
}

function cd(args) {
  return bash("cd", args);
}

function touch(args) {
  return bash("touch", args);
}

function whoami(args) {
  return bash("whoami", args);
}

function ln(args) {
  return bash("ln", args);
}

function pwd(args) {
  return bash("pwd", args);
}

function tac(args) {
  return bash("", args);
}

function more(args) {
  return bash("", args);
}

function less(args) {
  return bash("", args);
}

function su(args) {
  return bash("su", args);
}

function id(args) {
  return bash("", args);
}

function useradd(args) {
  return bash("", args);
}

function groupadd(args) {
  return bash("", args);
}

function cut(args) {
  return bash("", args);
}

function passwd(args) {
  return bash("passwd", args);
}

function pwd(args) {
  return bash("pwd", args);
}

function tempdir(args) {
  return bash("", args);
}

function uniq(args) {
  return bash("", args);
}

function which(args) {
  return bash("which", args);
}

module.exports.set = Object.assign(set.prototype, to);
module.exports.ls = Object.assign(ls.prototype, to);
module.exports.sed = Object.assign(sed.prototype, to);
module.exports.tee = Object.assign(tee.prototype, to);
module.exports.tr = Object.assign(tr.prototype, to);
module.exports.wc = Object.assign(wc.prototype, to);
module.exports.od = Object.assign(od.prototype, to);
module.exports.gzip = Object.assign(gzip.prototype, to);
module.exports.tar = Object.assign(tar.prototype, to);
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
module.exports.top = Object.assign(top.prototype, to);
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
