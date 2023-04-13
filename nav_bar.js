
let LISTA = [];
const KEPEK = [{src:"../Kepek/art.jpg",alt:"a kep tartalma"}];
const STYLE = [{src:"../style.css"}];

export function init(menus) {
  LISTA = menus;
  const NAV = $("nav");
  const HEAD = $("header");
  const META = $("head");
  
  let metakiiras = metatag();
  let navkiiras = nav();
  let headerkiiras = headerKep();
  NAV.append(navkiiras);
  HEAD.append(headerkiiras);
  META.append(metakiiras);
}

function nav() {
    let text = `<div class="container-fluid "><div class="d-flex p-2 bg-secondary">`;
    for (let index = 0; index < LISTA.length; index++) {
      text += `<div><a class="col p-3 text-white" href='${LISTA[index].link}'>${LISTA[index].tag}</a></div>`;
    }
    text += `</div></div>`
    //console.log(text);
    return text;
}
function headerKep() {
    let text = `<div>`;
    for (let index = 0; index < KEPEK.length; index++) {
      text += `<img class=" rounded "  src="${KEPEK[index].src}" alt="${KEPEK[index].alt}">`;
    }
    text += `</div>`
    //console.log(text);
    return text;
}
function metatag() {
    let text = "";
    for (let index = 0; index < STYLE.length; index++) {
      text += `<link rel="stylesheet" href="${STYLE[index].src}">`;
    }
    //console.log(text);
    return text;
}
