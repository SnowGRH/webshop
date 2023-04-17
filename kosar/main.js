import {ADATOKLISTA} from "../adatok.js"; 
import {init} from "../nav_bar.js";

$(function () {
    const LISTA = [
        { link: "../admin/admin.html", tag: "Admin" },
        { link: "../index.html", tag: "User" },
        { link: "kosar.html", tag: "Kosar" },
      ];
    init(LISTA);
    const ARTICLE = $("article");
    let artkiiras = table();
   // ARTICLE.append(artkiiras);

})

function table() {
  let txt = `<div class="container mt-3">
  <input class="form-control" id="myInput" type="text" placeholder="Keresés...">
  <br>
  <table class="table table-bordered  tablecoloradmin">
  <thead>
    <tr class="h2 text-center">

      <th>Kepneve</th>
      <th>Ára</th>
      <th>Modul</th>
      <th>Darab</th>
      <th>Elem törlése</th>
    </tr>
  </thead>
  <tbody id="myTable">
  `;

  for (let index = 0; index < ADATOKLISTA.length; index++) {
    txt += ` 
      <tr class=" h4 text-center" >
        <td class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">{ADATOKLISTA[index].kepneve}</td>

        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">{ADATOKLISTA[index].ara} Ft </td>
        <td class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
        <button type="button" id="view-${index}"  class=" btn bg-dark text-white viewBtn " data-bs-toggle="modal" data-bs-target="#myModal">
        Leiras
        </button>
        </td>
        <td class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">{ADATOKLISTA[index].teljesleira}</td>
      </tr>
`;
  }
  txt += `
  </tbody>
  </table>
  </div>`;
  return txt;
}