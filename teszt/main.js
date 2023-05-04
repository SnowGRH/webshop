let lista = {};
const ADATOK = [{
  kep: "../Kepek/GT_B20.jpg", 
  kepneve:"1951 Lancia Aurelia B20 GT",
  leiras:"A grand tourer (GT) .......",
  teljesleira:"A grand tourer (GT) is a type of car that is designed for high speed and long-distance driving, due to a combination of performance and luxury attributes.[1] The most common format is a front-engine, rear-wheel-drive two-door coupé with either a two-seat or a 2+2 arrangement. Grand tourers are most often the coupé derivative of luxury saloons or sedans.    The term is a near-calque from the Italian language phrase gran turismo which became popular in the English language from the 1950s, evolving from fast touring cars and streamlined closed sports cars during the 1930s",
  ara: "10000",
}]

$(function () {
  /*Az oldal szerkezete és annak fel épitése*/
  const LISTA = [
    { link: "admin.html", tag: "Admin" },
    { link: "../index.html", tag: "User" },
    { link: "../kosar/kosar.html", tag: "Kosar" },
  ];
  init(LISTA);
  /*Idáig*/
  const ART = $("article");
  const ASI = $("aside");
  let ASIKIIR =  asideKeresesLetrehozas();
  let ARTDIVKIIR = Artdiv();
  ART.append(ARTDIVKIIR);
  ASI.append(ASIKIIR);

  viewGomb();
  removeGomb(art);

  const MODELCHANGE = $("modal-dialog");
});
function asideKeresesLetrehozas(params) {
  let txt =   `<div class=" row">
  <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <input  id="myInput" type="text" placeholder="Keresés...">  
  </div>
  <button class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">Létre hozzás</button>
  </div>
  <br></br>`
  return txt  
}
function Artdiv() {
  let txt = `<div class="container mt-3">

  <table class="table table-bordered  tablecoloradmin">
  <thead>
    <tr class="h2 text-center">

      <th>Kepneve</th>
      <th>Leirás</th>
      <th>Ára</th>
      <th>Modul </th>
      <th>Törlés</th>
    </tr>
  </thead>
  <tbody id="myTable">
  `;

  for (let index = 0; index < ADATOKLISTA.length; index++) {
    txt += ` 
      <tr class=" h4 text-center" >
        <td class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">${ADATOKLISTA[index].kepneve}</td>
        <td class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">${ADATOKLISTA[index].leiras}</td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">${ADATOKLISTA[index].ara} Ft </td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <button type="button" id="view-${index}"  class=" btn bg-dark text-white viewBtn " data-bs-toggle="modal" data-bs-target="#myModal">
        Leiras
        </button>
        </td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <button class="btn removBtn bg-dark text-white" id="${index}">
        X
        </button>
        </td>
      </tr>
`;
  }
  txt += `
  </tbody>
  </table>
  </div>`;
  return txt;
}

function modelkezelese(adatok) {
  console.log(adatok);
  let modeltxt = "";
  modeltxt += `
  <div class="modal-content">
  <div class="modal-header">
  <button><<</button>
  <h4 class="modal-title">Termék neve: ${adatok.kepneve}  ||   Ára: ${adatok.ara} Ft</h4>
  
  <button>>></button>
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
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

function viewGomb() {
  $(".viewBtn").on("click", function (event) {
    let id = parseInt(event.target.id.split("-")[1]);
    modelkezelese(ADATOKLISTA[id]);
  });
}

function removeGomb(art) {
  $(".removBtn").off("click");
  $(".removBtn").on("click", function (event) {
    let id = parseInt(event.target.id);
    ADATOKLISTA.splice(id,1);
    art.html(Artdiv());
    removeGomb(art);
  });
}
