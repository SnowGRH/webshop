import { ADATOKLISTA } from "../adatok.js";
import {init} from "../nav_bar.js";

$(function () {
  /*Az oldal szerkezete és annak fel épitése*/
  const LISTA = [
    { link: "admin.html", tag: "Admin" },
    { link: "../index.html", tag: "User" },
    { link: "../kosar/kosar.html", tag: "Kosar" },
  ];
init(LISTA)
/*Idáig*/ 
  const art = $("article");
  let ARTDIVKIIR = Artdiv();
  art.append(ARTDIVKIIR);


  


});
function Artdiv() {
  let txt = "<div>";


  for (let index = 0; index < ADATOKLISTA.length; index++) {
    txt += `<div>
        <p>${ADATOKLISTA[index].kepneve}</p>
        <img src="${ADATOKLISTA[index].kep}">
        <p> ${ADATOKLISTA[index].leiras}</p>
        <p>Az ara: ${ADATOKLISTA[index].ara}</p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
Leiras
</button>
        </div>
</div>
`;
  }
  txt += `
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Modal Heading</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          Helloo
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
`;
  
  //console.log(txt);
  return txt;
}

