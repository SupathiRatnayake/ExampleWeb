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
    let item, img, dl, dtName, ddName, dtPrice, ddPrice;
    item = document.createElement("div");
    item.setAttribute("class", "item");
    img = this.img.makeElement();

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

    item.append(img, dl);

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
  let leaf = leaves.find(item => item.id == e.id);

  if (e.checked == true) {
    price += leaf.price;
    selectedItems.push(leaf);

  }
  else {
    price -= leaf.price;
    let startIndex;
    startIndex = selectedItems.indexOf(leaf);
    console.log(selectedItems.splice(index, 1));
  }
  document.getElementById("total").setAttribute("value", parseFloat(price).toFixed(2) + "$");
  console.log(selectedItems);
}

leaves.forEach((item, i) => {
  itemBox.appendChild(item.makeElement());

  let label, input, divBar;

  label = document.createElement("label");
  label.setAttribute("for", item.id);
  label.innerHTML = "Add to Cart";

  input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", item.id);
  input.setAttribute("value", item.name);
  input.setAttribute("onclick", "selectItem(this)");

  divBar = document.createElement("div");
  divBar.setAttribute("class", "addToCart");
  divBar.append(label, input);

  itemBox.appendChild(divBar);
});

let selectedItems = [];

document.getElementsByName("reset")[0].addEventListener("click", () =>
{
  document.getElementById("total").setAttribute("value", "0.00");
});

function purchase(form) {
  let purchaseItems = [];

  let inputs = form.personalInfor.elements;
  let inputList = Array.prototype.slice.call(inputs);
  console.log(inputs);

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      alert("Please fill " + inputs[i].name + " or I'll call the police!");
      inputs[i].focus();
      return false;
    }

  }

  let msg = "";
  selectedItems.forEach((item, i) => {
    msg += item.name + "\n";
  });

  alert(msg);
  console.log(msg);


}
