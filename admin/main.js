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

  const MODELCHANGE = $("modal-dialog");
});
function Artdiv() {
  let txt = `<div class="container mt-3">
  <table class="table table-bordered">
  <thead>
    <tr>

      <th>Kepneve</th>
      <th>Leiras</th>
      <th>Ára</th>
      <th>Teljes leirás </th>
    </tr>
  </thead>
  <tbody>
  `;

  for (let index = 0; index < ADATOKLISTA.length; index++) {
    txt += ` 
      <tr>
        <td>${ADATOKLISTA[index].kepneve}</td>
        <td>${ADATOKLISTA[index].leiras}</td>
        <td>${ADATOKLISTA[index].ara} Ft </td>
        <td>
        <button type="button" id="view-${index}"  class="btn btn-primary viewBtn" data-bs-toggle="modal" data-bs-target="#myModal">
        Leiras
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

function viewGomb() {
  $(".viewBtn").on("click", function (event) {
    let id = parseInt(event.target.id.split("-")[1]);
    modelkezelese(ADATOKLISTA[id]);
  });
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
