import { ADATOKLISTA } from "../adatok.js";
import { init } from "../nav_bar.js";

$(function () {
  /*Az oldal szerkezete és annak fel épitése*/
  const LISTA = [
    { link: "admin.html", tag: "Admin" },
    { link: "../index.html", tag: "User" },
    { link: "../kosar/kosar.html", tag: "Kosar" },
  ];
  init(LISTA);
  /*Idáig*/
  const art = $("article");
  let ARTDIVKIIR = Artdiv();
  art.append(ARTDIVKIIR);

  viewGomb();
  removeGomb();

  const MODELCHANGE = $("modal-dialog");
});
function Artdiv() {
  let txt = `<div class="container mt-3">
  <input class="form-control" id="myInput" type="text" placeholder="Keresés...">
  <br>
  <table class="table table-bordered">
  <thead>
    <tr>

      <th>Kepneve</th>
      <th>Leiras</th>
      <th>Ára</th>
      <th>Teljes leirás </th>
      <th>Törlés</th>
    </tr>
  </thead>
  <tbody id="myTable">
  `;

  for (let index = 0; index < ADATOKLISTA.length; index++) {
    txt += ` 
      <tr class="removBtn" >
        <td class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">${ADATOKLISTA[index].kepneve}</td>
        <td class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">${ADATOKLISTA[index].leiras}</td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">${ADATOKLISTA[index].ara} Ft </td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <button type="button" id="view-${index}"  class="btn btn-primary viewBtn " data-bs-toggle="modal" data-bs-target="#myModal">
        Leiras
        </button>
        </td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <button class="bg-danger">
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

function removeGomb() {
  $(".removBtn").on("click", function (event) {
    let id = parseInt(event.target.id.split("-")[1]);
    $("tr").remove(ADATOKLISTA[id]);
  });
}
