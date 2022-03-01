#About using rsa key

First of all it's necessary to copy the public key into the ssh server
the command to do this is:


```
ssh-copy-id -i (path/to/publickey) ssh-user@server-location
```

#About removing a know host
The ssh-keygen has an utilitary tool for that. It's necessary to pass the known hosts file and remove the server location ip/dns


```
ssh-keygen -f "/path/to/know_hosts/file" -R "ip/dns server"
```

#About preventing ssh into server with password

Access /etc/ssh/sshd_config as root and set:
 - PasswordChallenge to no
 - UsePam to no
 - PermitRootLogin to no

After restart the ssh service
```
sudo service ssh restart
```
