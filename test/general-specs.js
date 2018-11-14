"use strict";

let chai = require("chai");
let should = chai.should();
let ssh = require("../lib/index");

const USER = process.env.TEST_USER || "guest";
const HOST = process.env.TEST_HOST || "localhost";


before(function(done) {
  done();
});

after(function(done) {
  // here you can clear fixtures, etc.
  done();
});

describe("Defining host", function() {
  it("Should define host and user account", function (done) {
    ssh.defineHost(USER, HOST);
    ssh.run("pwd", (err, output) => {
      err.should.equal(false);
      output.should.equal("/home/pi");
      done();
    });
  });
});
