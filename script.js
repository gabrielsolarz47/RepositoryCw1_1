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
  ex2_text.oninput = function() {

    const regex = /[A-Za-z]/;
    const regex2 = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    if (ex2_text.value.length != 9) {
      ex2_content.innerHTML = "Dlugosc numeru musi byc rowna 9";

    }
    else if (regex.test(ex2_text.value)) {
      ex2_content.innerHTML = "Numer telefonu nie moze zawierac liter";

    }

    else if (regex2.test(ex2_text.value)) {
      ex2_content.innerHTML = "Numer telefonu nie moze zawierac znakow specjalnych";
    }


    else {
      ex2_content.innerHTML = "Numer telefonu jest poprawny";
    }
  }
  var ex3_element = document.getElementById('ex3_element');
  var ex3_one = document.getElementById('ex3_one');
  var ex3_two = document.getElementById('ex3_two');
  ex3_element.setAttribute('draggable', true);
  ex3_element.ondragstart = function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }
  ex3_two.ondragover = function(event) {
    event.preventDefault();
  }
  ex3_two.ondrop = function(event){
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var element = document.getElementById(data);
    ex3_two.appendChild(element);
  }
  
})();

