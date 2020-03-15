// website logo
let aTag,logo;
aTag = document.createElement("a");
aTag.setAttribute("href", "index.html");
logo = document.createElement("div");
logo.setAttribute("id", "logo");
aTag.appendChild(logo);
document.getElementsByTagName("header")[0].appendChild(aTag);

// --------- Making Main Navigation Bar ---------

let nav = document.getElementsByTagName("nav")[0];

// menu button for mobile devices
let btnMenu = document.createElement('button');
btnMenu.setAttribute('type', 'button');
btnMenu.setAttribute('onclick', 'displayMenu()');
btnMenu.innerHTML = 'menu <i class="fa fa-angle-down"></i>';

nav.appendChild(btnMenu);

// ------------- Page data base -----------------
var index = {name: 'Home', id:'index', file: '#index.html'};
var about = {name: 'About', id:'about', file: '#about.html'};
var shop = {name: 'Shop', id:'tours', file: '#tourPackages.html'};
var gallery = {name: 'Gallery', id:'gal', file: '#gallery.html'};

navLinks = [index, about, shop, gallery];
let navContainer = document.createElement("div");
navContainer.setAttribute("id","mainNavigation");
navLinks.forEach((item, i) => {
  let a = document.createElement("a");
  a.innerHTML = item.name;
  a.setAttribute("href", item.file);
  a.setAttribute("id", item.id);
  navContainer.appendChild(a);
});
nav.appendChild(navContainer);


// Drop Down Menu - Mobile devices Only
function displayMenu() {
    var menu = document.getElementById('mainNavigation');

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    }else {
        menu.style.display = "flex";
    }
}

// ----------- footer ------------
var footer = document.getElementsByTagName('footer')[0];

var hr = document.createElement('hr');
footer.appendChild(hr);

// ------ make data list ----------
var dl = document.createElement('dl');
dl.setAttribute('class', 'footer-data');


var dt = document.createElement('dt');
dt.innerHTML = 'Contact';
dl.appendChild(dt);

var dd = document.createElement('dd');
dd.innerHTML = '+xx-xxx xxx xxxx';
dl.appendChild(dd);

var dd = document.createElement('dd');
dd.innerHTML = '+xx-xxx xxx xxxx';
dl.appendChild(dd);

var dd = document.createElement('dd');
dd.innerHTML = '+xx-xxx xxx xxxx';
dl.appendChild(dd);

footer.appendChild(dl);

//--------- New data list For Address-----------
var dl = document.createElement('dl');
dl.setAttribute('class', 'footer-data');

var dt = document.createElement('dt');
dt.innerHTML = 'Address';
dl.appendChild(dt);

var dd = document.createElement('dd');
dd.setAttribute('class', 'address');
// ----- address --------

var p = document.createElement('p');
p.innerHTML = 'International Leafenist Organization';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'No. 57';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'Ramakrishna Road';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'Colombo 06';
dd.appendChild(p);

var p = document.createElement('p');
p.innerHTML = 'Sri Lanka';
p.setAttribute('id', 'address-locality');
dd.appendChild(p);

dl.appendChild(dd);

footer.appendChild(dl);
// ----- end address ------

//--------- New data list For Email-----------
var dl = document.createElement('dl');
dl.setAttribute('class', 'footer-data');

var dt = document.createElement('dt');
dt.innerHTML = 'Email';
dl.appendChild(dt);

var dd = document.createElement('dd');
var a = document.createElement('a');
a.setAttribute('href', 'mailto:inquiries@leaf.com');
a.innerHTML = 'inquiries@leaf.com';
dd.appendChild(a);
dl.appendChild(dd);

var dt = document.createElement('dt');
dt.innerHTML = 'Fax';
dl.appendChild(dt);

var dd = document.createElement('dd');
dd.innerHTML = 'xx-xxx xxx xxxx';
dl.appendChild(dd);

footer.appendChild(dl);

//--------- Additional Data ----------
var dataBox = document.createElement('div');
dataBox.setAttribute('id', 'databox');
dataBox.setAttribute('class', 'footer-data');

    // ------ credits --------

    var creditsDiv = document.createElement('div');
    creditsDiv.setAttribute('id', 'credits');

    var p = document.createElement('p');
    p.innerHTML = 'Copyright © 2020 ILO';
    creditsDiv.appendChild(p);

    var p = document.createElement('p');
    p.innerHTML = 'Website designed and developed by<br />Tarantula Web.inc';
    creditsDiv.appendChild(p);

    dataBox.appendChild(creditsDiv);

    // -------- More Data ----------------

    // line break
    var br = document.createElement('br');
    br.innerHTML = "Terms & Conditions";

    dataBox.appendChild(br);

    var a = document.createElement('a');
    a.setAttribute('href', '#terms.html');
    a.setAttribute('id', 'terms');
    a.innerHTML = "Terms & Conditions";

    dataBox.appendChild(a);


footer.appendChild(dataBox);
