
// Load native UI library
var gui = require('nw.gui');


//&&&&&&&&&&&&&&&&&&&&&&&&&&&

// Create a menuitem
var sub1 = new gui.Menu();
/*
sub1.append(new gui.MenuItem({
label: '1. Klasse',
click: function() {
  window.location.asign("http://www.lehrmittelverlag-zuerich.ch/Portals/1/Documents/lehrmittelsites/matheprimar/rout1gr/_framework/mathematik1_de.html");
}
}));

sub1.append(new gui.MenuItem({
label: '2. Klasse',
click: function() {
  window.location("http://www.lehrmittelverlag-zuerich.ch/Portals/1/Documents/lehrmittelsites/matheprimar/rout2gr/_framework/mathematik2_de.html");
}
}));

sub1.append(new gui.MenuItem({
label: '3. Klasse',
click: function() {
  window.location("http://www.lehrmittelverlag-zuerich.ch/Portals/1/Documents/lehrmittelsites/matheprimar/rout3gr/_framework/mathematik3_de.html");
}
}));

sub1.append(new gui.MenuItem({
label: '4. Klasse',
click: function() {
  window.location("http://www.lehrmittelverlag-zuerich.ch/Portals/1/Documents/lehrmittelsites/matheprimar/matheprimar_4/fertigkeiten/de/index.html");
}
}));


sub1.append(new gui.MenuItem({ type: 'separator' }));
*/

sub1.append(new gui.MenuItem({
label: 'Beenden',
click: function() {
  process.exit();
}
}));


// Create a menubar for window menu
var menubar = new gui.Menu({ type: 'menubar' });

var win = gui.Window.get();
//assign the menubar to window menu
win.menu = menubar;


// You can have submenu!
menubar.append(new gui.MenuItem({ label: 'Mathe Trainer', submenu: sub1}));


