// website logo
var aTag = document.createElement('a');
aTag.setAttribute('href', 'index.html');

// var img = document.createElement('img');
// img.setAttribute('src', 'images/banner.png');
// img.setAttribute('alt', 'Tour Lanka Logo');

aTag.innerHTML = "Leaf.com";

// aTag.appendChild(img);

document.getElementById('siteName').appendChild(aTag);


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
    a.setAttribute('href', 'terms.html');
    a.setAttribute('id', 'terms');
    a.innerHTML = "Terms & Conditions";

    dataBox.appendChild(a);


footer.appendChild(dataBox);
