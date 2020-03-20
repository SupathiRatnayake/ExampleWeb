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
    let item, img, dl, dtName, ddName, dtPrice, ddPrice, label, input, divBar;
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
    ddPrice.innerHTML = this.price;

    dl.append(dtName, ddName, dtPrice, ddPrice);

    label = document.createElement("label");
    label.setAttribute("for", this.id);
    label.innerHTML = "Add to Cart";

    input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", this.id);
    input.setAttribute("value", this.name);
    input.setAttribute("onclick", "selectItem(this)");

    divBar = document.createElement("div");
    divBar.setAttribute("class", "addToCart");
    divBar.append(label, input);

    item.append(img, dl, divBar);

    return item;
  }
}

let img1 = new Img("green_leaf.jpg", "green_leaf");

let l1 = new Leaf("l1", "Leaf 1", new Img("green_leaf.jpg", "green_leaf"), "abc", 5.00);
let l2 = new Leaf("l2", "Leaf 2", new Img("pink_leaf.jpg", "pink_leaf"), "def", 10.00);
let l3 = new Leaf("l3", "Leaf 3", new Img("brown_leaf.jpg", "pink_leaf"), "ghi", 15.50);
let l4 = new Leaf("l4", "Leaf 4", new Img("yellow_leaf.jpg", "pink_leaf"), "jkl", 10.00);
let l5 = new Leaf("l5", "Leaf 5", new Img("green_leaf.jpg", "pink_leaf"), "mno", 20.00);
let l6 = new Leaf("l6", "Leaf 6", new Img("pink_leaf.jpg", "pink_leaf"), "pqr", 7.00);
let l7 = new Leaf("l7", "Leaf 7", new Img("yellow_leaf.jpg", "pink_leaf"), "stu", 10.50);

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

  inputList.forEach((item, i) => {
    if (item.value.length == 0) {
      alert("Enter data fucker!\n" + "You've left " + item.name + " empty!");
    }
    console.log(item.value);
  });

  let msg = "";
  selectedItems.forEach((item, i) => {
    msg += item.name + "\n";
  });

  alert(msg);
  console.log(msg);


}
