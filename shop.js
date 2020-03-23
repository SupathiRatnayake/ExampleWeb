itemBox = document.getElementsByClassName('items')[0];

function Img(file, alt) {

  this.file = file;
  this.alt = alt;

  this.makeElement = () =>{
    let e = document.createElement("img");
    e.setAttribute("src", "images/" + file);
    e.setAttribute("alt", alt);
    return e;
  }
}

function Leaf(id, name, img, descrip, price) {

  this.id = id;
  this.name = name;
  this.img = img;
  this.descrip = descrip;
  this.price = price;

  this.makeElement = () =>{
    let item, fig, img, dl, dtName, ddName, dtPrice, ddPrice, detailsDiv;
    item = document.createElement("div");
    item.setAttribute("class", "item");
    img = this.img.makeElement();

    fig = document.createElement("figure");
    fig.appendChild(img);

    dl = document.createElement("dl");

    dtName = document.createElement("dt");
    dtName.innerHTML = this.name;
    ddName = document.createElement("dd");
    ddName.innerHTML = this.descrip;

    dtPrice = document.createElement("dt");
    dtPrice.innerHTML = "Price";
    ddPrice = document.createElement("dd");
    ddPrice.setAttribute("class", "currency")
    ddPrice.innerHTML = parseFloat(this.price).toFixed(2);
    dl.append(dtName, ddName, dtPrice, ddPrice);

    detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "detailsDiv");
    detailsDiv.appendChild(dl);

    item.append(fig, detailsDiv);

    return item;
  }
}

let img1 = new Img("green_leaf.jpg", "green_leaf");

let l1 = new Leaf("l1", "Shizpierce", new Img("green_leaf.jpg", "green_leaf"), "Aenean commodo ac purus id sollicitudin.", 5.00);
let l2 = new Leaf("l2", "Alexanderend", new Img("pink_leaf.jpg", "pink_leaf"), "Nulla pulvinar massa quis magna laoreet blandit.", 10.00);
let l3 = new Leaf("l3", "Rodriguedrin ", new Img("brown_leaf.jpg", "pink_leaf"), "Curabitur nec purus sed ipsum molestie.", 15.50);
let l4 = new Leaf("l4", "Tuxie", new Img("yellow_leaf.jpg", "pink_leaf"), "Proin suscipit aliquet pharetra.", 10.00);
let l5 = new Leaf("l5", "Whiteya", new Img("green_leaf.jpg", "pink_leaf"), "Praesent quis pellentesque elit.", 20.00);
let l6 = new Leaf("l6", "Forestson", new Img("pink_leaf.jpg", "pink_leaf"), "Morbi finibus facilisis sapien.", 7.00);
let l7 = new Leaf("l7", "Glenkelley", new Img("yellow_leaf.jpg", "pink_leaf"), "Integer et ligula at urna varius ornare.", 10.50);

let leaves = [l1, l2, l3, l4, l5, l6, l7];

let selectItem = (e) => {

  let price = parseFloat(document.getElementById("total").getAttribute("value"));
  let lbl = document.getElementById("lbl" + e.id);

  let leaf = leaves.find(item => item.id == e.id);

  if (e.checked == true) {
    price += leaf.price;
    selectedItems.push(leaf);
    lbl.innerHTML = "Remove from cart";
    lbl.style.backgroundColor = "#faa";

  }
  else {
    price -= leaf.price;
    let index;
    index = selectedItems.indexOf(leaf);
    console.log(selectedItems.splice(index, 1));
    lbl.innerHTML = "Add to cart";
    lbl.style.backgroundColor = "#ce5";

  }
  document.getElementById("total").setAttribute("value", parseFloat(price).toFixed(2) + "$");
  console.log(selectedItems);
}

leaves.forEach((leaf, i) => {
  let item, label, input, container, inputBar;

  item = leaf.makeElement();

  label = document.createElement("label");
  label.setAttribute("for", leaf.id);
  label.setAttribute("id", "lbl" + leaf.id);
  label.innerHTML = "Add to Cart";


  input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", leaf.id);
  input.setAttribute("value", leaf.name);
  input.setAttribute("onclick", "selectItem(this)");

  inputBar = document.createElement("div");
  inputBar.setAttribute("class", "addToCart");
  inputBar.append(input);

  container = document.createElement("div");
  container.setAttribute("class", "itemContainer");
  container.append(item,label, input);

  itemBox.appendChild(container);
});

// add options to select element MONTH
for (var i = 1; i <= 12; i++) {
  let option = document.createElement("option");
  option.setAttribute("value", i);
  option.innerHTML = i;
  document.getElementById("month").appendChild(option);
}

// add options to select element YEAR
for (var i = 0; i <= 10; i++) {
  let option = document.createElement("option");
  let currentYear = 2020;
  option.setAttribute("value", currentYear + i);
  option.innerHTML = currentYear + i;
  document.getElementById("year").appendChild(option);
}

// toggleDisplay function to show/hide payment details content
function toggleDisplay(rad) {
  if (rad.id == "card") {
    document.getElementById("cardPayContent").style.display = "flex";
    document.getElementById("paypalContent").style.display = "none";
  }
  else if (rad.id = "paypal") {
    document.getElementById("cardPayContent").style.display = "none";
    document.getElementById("paypalContent").style.display = "flex";
  }
}


let selectedItems = [];

document.getElementsByName("reset")[0].addEventListener("click", () => {
  document.getElementById("total").setAttribute("value", "0.00");
});

let getAction = (e) =>{
  let message = "Value you entered to " + e.name + " in invalid!";
  if (e.value == "") {
    message = "Please fill " + e.name + " or I'll call the police!";
  }
  alert(message);
  e.style.borderColor = "red";
  e.focus();
}

let isValid = (e) =>{

  let regexMatch = {
    "fname" : /^[a-zA-Z ]+$/,
    "lname" : /^[a-zA-Z ]+$/,
    "email" : /^\w+([\.-]?\w+)*@\w+([\.-]\w+)*(\.\w{2,3})+$/,
    "houseNo" : /([^\s])/,
    "street" : /([^\s])/,
    "city" : /([^\s])/,
    "postal" : /^\d+$/,
    "cardNo" : /^\d+$/,
    "month" : /^\d+$/,
    "year" : /^\d+$/,
    "secCode" : /^\d+$/,
  }

  if (!e.value.match(regexMatch[e.id])) {

    return false;

  }

  return true;

}

let getPaymentMethod = () =>{

  let radios = document.getElementsByName('Payment_Method');
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i];
    }

  }

}

function purchase(form) {

  let personalInformation = form.personalInfor.elements;

  console.log(personalInformation);

  for (var i = 0; i < personalInformation.length; i++) {
    let e = personalInformation[i];
    if (!isValid(e)){
      getAction(e);
      return false;
    }
  }

  if (getPaymentMethod(form).value == "Card Payment") {

    let cardNo, month, year, secCode;

    cardNo = document.getElementById("cardNo");
    month = document.getElementById("month");
    year = document.getElementById("year");
    secCode = document.getElementById("secCode");

    let elements = [cardNo, month, year, secCode];
    elements.forEach((e, i) => {
      if (!isValid(e)) {
        getAction(e);
        return false;
      }
    });

  }

  if (selectedItems.length == 0) {
    alert("You have not selected any items!");
    return false;
  }


  let msg = "Do you want to continue purchase?\n";
  selectedItems.forEach((item, i) => {
    msg += item.name + " :   " + item.price + "\n";
  });

  confirm(msg);
  console.log(msg);


}

document.shop.reset.addEventListener("click", () => {
  leaves.forEach((leaf, i) => {
    let label = document.getElementById("lbl" + leaf.id);
    label.style.backgroundColor = "#ce5"
    label.innerHTML = "Add to cart"
  });

  document.getElementById("cardPayContent").style.display = "flex";
  document.getElementById("paypalContent").style.display = "none";

  selectedItems = [];

});
