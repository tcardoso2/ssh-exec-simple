"use strict";

let { exec } = require("child_process");

let myUser;
let myHost;

let defineHost = (user, host) => {
  myUser = user;
  myHost = host;
};

let run = (command, callback, logger = console) => {
  try{
    let cmd = `ssh ${myUser}@${myHost} "${command}"`;
    logger.log(`Executing command '${cmd}'...`);
    exec(cmd, (err, stdout) => {
      callback(err, stdout);
    });
  }catch(e){
    callback(false, e.message);
  }
};

exports.defineHost = defineHost;
exports.run = run;
