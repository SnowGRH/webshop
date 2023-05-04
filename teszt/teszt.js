QUnit.module("fizbuz", function () {
  QUnit.test("üres lista", function (assert) {
    ADATOKLISTA = [{}];
    assert.equal(
      Artdiv(),
      `<div class=\"container mt-3\">

  <table class=\"table table-bordered  tablecoloradmin\">
  <thead>
    <tr class=\"h2 text-center\">
      <th>Kepneve</th>
      <th>Leirás</th>
      <th>Ára</th>
      <th>Modul </th>
      <th>Törlés</th>
    </tr>
  </thead>
  <tbody id=\"myTable\">
          <tr class=\" h4 text-center\" >
          <td class=\"col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3\">undefined</td>
          <td class=\"col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3\">undefined</td>
          <td class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2\">undefined Ft </td>
          <td class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2\">
          <button type=\"button\" id=\"view-0\"  class=\" btn bg-dark text-white viewBtn \" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">
          Leiras
          </button>
          </td>
          <td class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2\">
          <button class=\"btn removBtn bg-dark text-white\" id=\"0\">
          X
          </button>
          </td>
        </tr>
    
      </tbody>
      </table>
      </div>`
    );
  });
  QUnit.test("1 elemű lista", function (assert) {
    let index = 0;
    ADATOKLISTA = [
      {
        kep: "../Kepek/GT_B20.jpg",
        kepneve: "1951 Lancia Aurelia B20 GT",
        leiras: "A grand tourer (GT) .......",
        teljesleira:
          "A grand tourer (GT) is a type of car that is designed for high speed and long-distance driving, due to a combination of performance and luxury attributes.[1] The most common format is a front-engine, rear-wheel-drive two-door coupé with either a two-seat or a 2+2 arrangement. Grand tourers are most often the coupé derivative of luxury saloons or sedans.    The term is a near-calque from the Italian language phrase gran turismo which became popular in the English language from the 1950s, evolving from fast touring cars and streamlined closed sports cars during the 1930s",
        ara: "10000",
      },
    ];
    assert.equal(
      Artdiv(),
      `<div class=\"container mt-3\">

        <table class=\"table table-bordered  tablecoloradmin\">
        <thead>
          <tr class=\"h2 text-center\">
      
            <th>Kepneve</th>
            <th>Leirás</th>
            <th>Ára</th>
            <th>Modul </th>
            <th>Törlés</th>
          </tr>
        </thead>
        <tbody id=\"myTable\">
         
            <tr class=\" h4 text-center\" >
              <td class=\"col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3\">1951 Lancia Aurelia B20 GT</td>
              <td class=\"col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3\">A grand tourer (GT) .......</td>
              <td class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2\">10000 Ft </td>
              <td class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2\">
              <button type=\"button\" id=\"view-0\"  class=\" btn bg-dark text-white viewBtn \" data-bs-toggle=\"modal\" data-bs-target=\"#myModal\">
              Leiras
              </button>
              </td>
              <td class=\"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2\">
              <button class=\"btn removBtn bg-dark text-white\" id=\"0\">
              X
              </button>
              </td>
            </tr>
        </tbody>
        </table>
        </div>`
    );
  });
});
