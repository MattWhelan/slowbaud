# SlowBaud

Usage: node slowbaud.js [-t] baudRate filenames....

# Options 

*-t:* The -t option emulates human typing by adjusting
the interval function.  Instead of a constant interval, a normal
distribution is used, so the typing feels less mechanically smooth
and more naturally bursty.

*baudRate:* The baudRate should end up feeling about like a modem
connection of that rate.  Characters per second is 1/9 of that rate
(we assume no parity, 8 data bits and 1 stop bit).  If you want
something more like a fast, sustained typing speed, go for 70-100.

*filenames:* Specify as many filenames as you like.  They should,
of course, be plain text.
