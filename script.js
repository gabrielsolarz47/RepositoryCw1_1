(function() {
  var ex1_button = document.getElementById('ex1_button');
  var ex1_content = document.getElementById('ex1_content');

  ex1_button.onclick = function() {
    var tabela = [];
    for (var i = 1; i < 10; i++) {
      tabela.push(i);
    }
    ex1_content.innerHTML = tabela.toString();
  }
  var ex2_text = document.getElementById('ex2_text');
  var ex2_content = document.getElementById('ex2_content');
  ex2_text.onchange = function() {
    if (ex2_text.value.length != 9) {
      ex2_content.innerHTML = "Dlugosc numeru musi byc rowna 9";
      const regex = /[^A-Za-z]/g;
      if (regex.test(ex2_text.value)) {
        ex2_content.innerHTML = "Numer telefonu nie moze zawierac liter";
        const regex2 = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
        if (regex2.test(ex2_text.value)) {
          ex2_content.innerHTML = "Numer telefonu nie moze zawierac znakow specjalnych";
          if (ex2_text.value.length == 9) {
            ex2_content.innerHTML = "Numer telefonu jest poprawny";
          }
        }
      }
    }
    
    
    

  }
})();

