function robot() {

    var chimifoo = ['pierre', 'feuille', 'ciseaux'];
    var choixordi = chimifoo[Math.round(Math.random() * 2)];
    var x = 0
    var y = 0
  


    for (var i = 0; i < 3; i++) {
        var votrechoix = prompt('Choississez entre:\r\n 1-Pierre\r\n 2-Feuille \r\n 3-Ciseaux');
        if (votrechoix == choixordi) {
            alert('Le bot a choisi ' + choixordi + ' egalement');
            alert('Egalité!');
        }
        else if (votrechoix == 'Pierre' && choixordi == 'Ciseaux' || votrechoix == 'Feuille' && choixordi == 'Pierre' || votrechoix == 'Ciseaux' && choixordi == 'Feuille') {
            alert('Gagné!');
            x++;
        }
        else {
            alert('Perdu!');
            y++;
        }
        if (x == y && i == 2) {
            alert('Fin du  jeu vous avez fait une Egalité !');
        }
        else if (x > y && i == 2) {
            alert('Fin du jeu, Vous avez Gagné !');
        }
        else if (y > x && i == 2) {
            alert('Fin du jeu, Vous avez perdu !');
        }



    }

}

robot()




























