var GAME_LEVELS = [
  ["                                                                                                    ",
   "                                                                                                    ",
   "                                                                                                    ",
   "                                                                                                    ",
   "                                                                                                    ",
   "                     o       o                              o     xx!  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                    o      xx      x!oo!xxxxxxxxxxxxxxxxxxxxxvxxxxxx",
   "                   xxxx     xxx               o     xx             x!oo!x                        xxx",
   "             o              xxx              xx                    x!oo!x        o o o o o       xxx",
   "x           xxxx            xxx     o o                            x!oo!x                        xxx",
   "x                   o       xxx                        o o         x!oo!x   o                    xxx",
   "xx                xxxxxu    xxx    xxxxx                           x!oo!x        xxxxxxxxx       xxx",
   "xxx                         xxx           o o         xxxxx        x!oo!x     xxxxxxxxxxxx   o   xxx",
   "xxx                        oxxx                                    x!oo!x o      xxxxxxxxx   o   xxx",
   "xxx                       xxxxx          xxxxx                    !!!oo!x        xxxxxxxxx   o   xxx",
   "xxx          xxxx      o  xxxxx                              J  !!!!!oovxxxx  o  xxxxxxxxx   o   xxx",
   "xxx  y@      xxxx         xxxxx                 o      o   xxxx!!!!!!            xxxxxxxxx   o   xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                            x!!!!!!!!v            xxxxxxxxx   o   xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                xxx    xxxxxx!!!xxxxx            xxx ooo    o o o xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xooo            xxxx ooo     ooo  xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xooo           xxxxxxxxxxxxx  o   xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxx      xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxx      xxx"],
  ["     v                                x!!x                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                      x!!x                   xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "     @                                x!!xxxxxxxxxx          x              xxxxxxxx!!!!!xxxxxxx",
   "                                      xx!!!!!!!!!!xx         x                      vvvvv       ",
   "                                       xxxxxxvvxx!!x         x                                  ",
   "                                                xx!x         xoo   o   o                        ",
   "     o                                           x!x         xoo   o   o                  ooooo ",
   "     o                                           xvx         xxx   x   x                  ooooo ",
   "     o                                                       xx  |   |   |  xx            xxxxxx",
   "     o                                                        xx!!!!!!!!!!!xx                xxx",
   "     o                                                         xxxx!!!!!xxxx                 xxx",
   "     o                                               x            xxxxxxx        xxx!!       xxx",
   "     o                                               x                           x x!!  o    xxx",
   "     o   S                                           x                         xxx x!!  o    xxx",
   "     o       xxx                                    xx                             x!!  o    xxx",
   "     o            xxx                               xx                             x!!  o    xxx",
   "                       xxx                          xx                   xx!!!!!!!!!!!  o    xxx",
   "             ooo            xxx       o   o      xxxxx      o  o         xx!!!!!!!!!!!  o    xxx",
   "                                 o                  xx                   xx!!xxxxxxxxx  o    xxx",
   "                                    xxxxxxxxx       xx     xxxxxx        xx!!x          o    xxx",
   "   y                     o  o       x!!!!!!!!!!!!!!!!!=  =  =  =  =  =  =!!!!x  o  o    o    xxx",
   "    xxx                             x!!!!!!!!!!!!!!!!! =  =  =  =  =  =  !!!!x          o    xxx",
   "    xxx                xxxxxxxxx    xxxx!xx!xx!xx!xxxxx                  xxxxx    xx  o o o  xxx",
   "!!!!xxx!!!!!!xx!!!!!!xxxxxxxxxxx       xv  v  v  v   xxxx   ooo                  xxx   ooo   xxx",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!xx                                          o o o   xxxx   o   xxxx",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!x           oo oo oo oo        xxx                  xxxxx     xxxxx",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!x           oo oo oo oo                   xxxxxxxxxxxxxxxyyyyyxxxxx",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!xx        xxxxxxxxxxxxxxx              xxxxxxxxxxxxxxxxxx     xxxxx",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!xx       xx!!!!!!!!!!!!xxx            xxxxxxxxxxxxxxxxx       xxxx",
   "!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!x       x!!!!!!!!!!!!!!!x            xxxxxxxxxxxxxxxx         xxx"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "         @                                                                                                     ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                            x                                                 ",
   "                                                       rrr  x                                                 ",
   "                           x                                x                                                 ",
   "                           xrrrrrrrrrrrrrrrrrrrrrrr         x                                  rrrrr          ",
   "                           x                               Jx    o   o  oooo  ooooo  oooo    rrrrrrrrr        ",
   "                  ooooo    !!!!!!!                       rrrx    o   o  o  o  o o o  o      rrrrrrrrrrr       ",
   "                           |xx|xx|xx|xx|xx|            x    x    ooooo  o  o  o o o  ooo   rrrrrrrrrrrrr      ",
   "                  xxxxx                              x      x    o   o  o  o  o   o  o      x         x       ",
   "=           o  o  x   x                            x        x    o   o  oooo  o   o  oooo   x   o     x       ",
   "=                 x   x                 rrrx    x           x                                   y  rrrx       ",
   "rrrrrrrrrrrrrrrrxxx   x                r     x              x                                   x  r! x       ",
   "                      x               r                     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx       ",
   "                      xxrrrrrrrrrrrrrrr                                                                      ",
   "                                                                                                              ",
   "                                                                                                              ",]
  // ["                                                                                                  xxx x       ",
   // "                                                                                                      x       ",
   // "                                                                                                  xxxxx       ",
   // "                                                                                                  x           ",
   // "                                                                                                  x xxx       ",
   // "                          o                                                                       x x x       ",
   // "                                                                                             o o oxxx x       ",
   // "                   xxx                                                                                x       ",
   // "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   // "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   // "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   // "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   // "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   // "                                                                                                              ",
   // "          o              xxx                              xx                                                  ",
   // "                                                                                                              ",
   // "                                                                                                              ",
   // "                                                      xx                                                      ",
   // "                   xxx         xxx                                                                            ",
   // "                                                                                                              ",
   // "                          o                                                     x      x                      ",
   // "                                                          xx     xx                                           ",
   // "             xxx         xxx         xxx                                 x                  x                 ",
   // "                                                                                                              ",
   // "                                                                 ||                                           ",
   // "  xxxxxxxxxxx                                                                                                 ",
   // "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   // "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   // "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   // "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   // "        x=                  =                =x   x                     xxx                                   ",
   // "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   // "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   // "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
