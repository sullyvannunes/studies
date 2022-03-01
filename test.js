#!/usr/bin/env gjs

imports.gi.versions.Gtk = "3.0";
const { Gtk } = imports.gi;

Gtk.init(null);

const button = new Gtk.ToggleButton({ label: 'Toggle Me!' });
button.connect('clicked', () => {
    log(`The button is: ${button.get_active() ? 'active' : 'inactive'}!`);
});

let button1 = new Gtk.Button({ label: 'Eu sou outro botão'});

const box = new Gtk.Box({  })
box.add(button);
box.add(button1)

const win = new Gtk.Window({ defaultHeight: 600, defaultWidth: 800 });
win.connect('destroy', () => { Gtk.main_quit(); });
win.add(box);
win.show_all();

Gtk.main();
