const LISTA = [
  { link: "../admin/admin.html", tag: "Admin" },
  { link: "../public/index.html", tag: "User" },
  { link: "../kosar/kosar.html", tag: "Kosar" },
];
const KEPEK = [{src:"../Kepek/art.jpg",alt:"a kep tartalma"}];
const STYLE = [{src:"../style.css"}];

$(function () {
  const NAV = $("nav");
  const HEAD = $("header");
  const META = $("head");
  
  let metakiiras = metatag();
  let navkiiras = nav();
  let headerkiiras = Headerkep();
  NAV.append(navkiiras);
  HEAD.append(headerkiiras);
  META.append(metakiiras);

});
function nav() {
    let text = `<div class="container-fluid "><div class="d-flex p-2 bg-secondary">`;
    for (let index = 0; index < LISTA.length; index++) {
      text += `<div><a class="col p-3 text-white" href='${LISTA[index].link}'>${LISTA[index].tag}</a></div>`;
    }
    text += `</div></div>`
    console.log(text);
    return text;
}
function Headerkep() {
    let text = `<div>`;
    for (let index = 0; index < KEPEK.length; index++) {
      text += `<img class=" rounded "  src="${KEPEK[index].src}" alt="${KEPEK[index].alt}">`;
    }
    text += `</div>`
    console.log(text);
    return text;
}
function metatag() {
    let text = "";
    for (let index = 0; index < STYLE.length; index++) {
      text += `<link rel="stylesheet" href="${STYLE[index].src}">`;
    }
    console.log(text);
    return text;
}
