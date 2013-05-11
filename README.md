Usage: node slowbaud.js baudRate filenames....

The baudRate should end up feeling about like a modem connection
of that rate.  Characters per second is 1/9 of that rate (we assume
no parity, 8 data bits and 1 stop bit).  If you want something more
like a fast, sustained typing speed, go for 70-100.

Specify as many filenames as you like.  They should, of course, but plain text.  
