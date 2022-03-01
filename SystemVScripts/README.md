#systemvinit
are scripts used by `service` and are located under `/etc/sys` directory. system v init scripts must
have how to deal with `start`, `stop`, `restart` and, `status` parameters.

#Systemd
are scripts used by `systemctl`.
They are located bellow `/lib/systemd` directory and terminate with `.service` suffix. Different from systemvinit
scripts, systemd scripts are templates using based on
https://www.freedesktop.org/software/systemd/man/systemd.service.html documentation.

It seems systemvinit scripts are more simples and used for simple usage so Service command first search for `/lib/systemd` scripts before search for `/etc/init.d`
