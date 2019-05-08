  function robot() {



    function estMultipleDeTrois(nombre) {
        return nombre % 3 === 0;
      }
      function estMultipleDeCinq(nombre) {
        return nombre % 5 === 0;
      }
      
      for (var n = 1 ; n <= 199 ; n++) {
        if (estMultipleDeTrois(n) && estMultipleDeCinq(n)) {
          console.log ('FizzBuzz');
        } else if (estMultipleDeTrois(n)) {
          console.log ('Fizz');
        } else if (estMultipleDeCinq(n)) {
          console.log ('Buzz');
        } else {
          console.log (n);
        }
      }
      
  }



  function robot1() {

    var compt = 10;
    var alea = Math.round(Math.random() * 100);
    for (var i = 0; i < 10; i++) {
      var choisi = prompt('Choissez un nombre entre 0 et 100');
      compt--;
      if (choisi == alea) {
        alert('Bravo');
        break;
      }
      else if (choisi > alea) {
        alert('plus petit \r\n Il te reste  '  +compt+ '  essai');
      }
      else if (choisi < alea) {
        alert('plus grand  \r\n Il te reste  '   +compt+  '  essai');
      }
    
    
    }
}

  
robot1()