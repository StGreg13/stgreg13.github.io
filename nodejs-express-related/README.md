1. Copy nodejs.service to systemd services folder:

For Debian -> cp nodejs.service /etc/systemd/system/nodejs.service
For CentOS -> cp nodejs.service /usr/lib/systemd/system/nodejs.service

2. Copy express.js file to /home folder:

cp express.js /home/express.js

3. Verify and install if needed nodejs express module:

npm install --prefix /home/temp/ express

4. Enable autorstart and run an application

systemctl enable nodejs
systemctl start nodejs


5. Nodejs app use syslog for logging. Logs could be found in /var/log/syslog
