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

  }
  else {
    price -= leaf.price;
    let startIndex;
    startIndex = selectedItems.indexOf(leaf);
    console.log(selectedItems.splice(index, 1));
    lbl.innerHTML = "Remove from cart";

  }
  document.getElementById("total").setAttribute("value", parseFloat(price).toFixed(2) + "$");
  console.log(selectedItems);
}

leaves.forEach((leaf, i) => {
  let item, label, input, container;

  item = leaf.makeElement();

  label = document.createElement("label");
  label.setAttribute("for", leaf.id);
  label.setAttribute("id", "lbl" + leaf.id);
  label.innerHTML = "Add to Cart";
  label.setAttribute("onclick", "toggleText(this)");


  input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", leaf.id);
  input.setAttribute("value", leaf.name);
  input.setAttribute("onclick", "selectItem(this)");

  container = document.createElement("div");
  container.setAttribute("class", "addToCart");
  container.append(item,input, label);

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

function purchase(form) {

  let inputs = form.personalInfor.elements;

  for (var i = 0; i < inputs.length; i++) {
    let e = inputs[i];
    if (e.value == "") {
      alert("Please fill " + e.name + " or I'll call the police!");
      e.style.borderColor = "red";
      e.focus();
      return false;
    }
    if (false) {
      console.log("yolo");
    }

  }



  let msg = "";
  selectedItems.forEach((item, i) => {
    msg += item.name + "\n";
  });

  alert(msg);
  console.log(msg);


}
