#
# Regular cron jobs for the webapps package
#
0 4	* * *	root	[ -x /usr/bin/webapps_maintenance ] && /usr/bin/webapps_maintenance
