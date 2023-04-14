import { init } from "./nav_bar.js";
import { ADATOKLISTA } from "../adatok.js";

$(function () {
  const LISTA = [
    { link: "/admin/admin.html", tag: "Admin" },
    { link: "/index.html", tag: "User" },
    { link: "/kosar/kosar.html", tag: "Kosar" },
  ];

  init(LISTA);

  const ART = $("article");
  let ARTDIVKIIR = Artdiv();
  ART.append(ARTDIVKIIR);

  viewGomb();

  const MODELCHANGE = $("modal-dialog");
  /* let MODELCHANGEKIIRAS = modelkezelese();
  MODELCHANGE.html(MODELCHANGEKIIRAS); */
});
function Artdiv() {
  let txt = `<div class="container mt-3 row">`;

  for (let index = 0; index < ADATOKLISTA.length; index++) {
    txt += `  <div class="card col-lg-3 col-md-4 col-sm-6 p-0">
    <div class="card-body">
      <h4 class="card-title">${ADATOKLISTA[index].kepneve}</h4>
      <p class="card-text">${ADATOKLISTA[index].leiras}</p>
      <p href="#" class="btn-primary">Az ara: ${ADATOKLISTA[index].ara} Ft</p>
    </div>
    <img class="card-img-bottom" src="${ADATOKLISTA[index].kep}" alt="Card image" style="width:100%">
    <button type="button" id="view-${index}"  class="btn btn-primary viewBtn" data-bs-toggle="modal" data-bs-target="#myModal">
    Leiras
    </button>
    </div>
`;
  /* for (let i = 0; i < ADATOKLISTA.length; i++) {
    console.log(i);
    $("myModal").on("click", function (event) {
      modelkezelese(ADATOKLISTA[i]);

    })
  } */
  }
  txt += `</div>`;
  //console.log(txt);
  return txt;
}

function viewGomb() {
  $(".viewBtn").on("click", function (event) {
    let id = parseInt(event.target.id.split("-")[1]);
    modelkezelese(ADATOKLISTA[id]);

  })
}

function modelkezelese(adatok) {
  console.log(adatok);
  let modeltxt = "";
  modeltxt += `
  <div class="modal-content">
  <div class="modal-header">
    <h4 class="modal-title">Termék neve: ${adatok.kepneve}  ||   Ára: ${adatok.ara} Ft</h4>
    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
  </div>
  <div class="modal-body">
  <img  src="${adatok.kep}" alt="image" style="width:100%">
    <p>${adatok.teljesleira}</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Bezárás</button>
  </div>
</div>
  `;
  let modal = $(".modal-dialog");
  modal.html(modeltxt);
}
