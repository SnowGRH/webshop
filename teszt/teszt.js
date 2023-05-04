QUnit.module("fizbuz", function () {
    QUnit.test("üres lista", function (assert) {
      assert.equal(modelkezelese(), '<tr><th>nev</th><td>tul1</td><td>tul2</td></tr><tr><th>Lajos</th><td>éhes</td><td>nagyon éhes</td></tr><tr><th>Csaba</th><td>éhes</td><td>nagyon éhes</td></tr><tr><th>Gáspárlajos</th><td>éhes</td><td>nagyon éhes</td></tr>');
  });
      
})