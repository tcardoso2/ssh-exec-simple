# ssh-exec-simple
A simple wrapper to the linux command `ssh user@server "<some command>"` which allows executing remote scripts via ssh provided the host has the permissions (make sure you generate the keys via ssh keygen and copy the pub key to the host).  

````
    ssh.defineHost("pi", "192.168.x.x");
    
    ssh.run("pwd", (err, output) => {
      //Do your handling here
      if(!err) {
        console.log(`Result is: ${output}`);
      }
    });
````

* Testing *

With mocha. Use environment variables as such to substitute with your user@host:  
````
TEST_USER=test TEST_HOST=192.168.0.160 mocha
````
