

function robot() {
    var reponse = prompt('')
    if (reponse == 'bonjour') {
        alert('bonjour a toi');
    } else if (reponse == 'tu vas bien ?') {
        alert('Bien, et toi ?');
    }
    else

        alert('Désolé, je n\'ai pas compris...');
}



function robot1() {

    var reponse = prompt('')
    if (reponse == 'bonjour') {
        alert('Bonjour ! Ca va ?');

        reponse = prompt('')
    } if (reponse == 'oui') {
        alert('Je suis content pour toi.');
    }
    else

        alert('Désolé, il faut que je file.');

}


function robot2() {

    var reponse = prompt('');
    if (reponse == 'Bonjour') {
        alert('Bonjour à toi!');
    } if (reponse == 'Tu vas bien?') {
        alert('Bien et toi?');
    } if (reponse == 'oui') {
        alert('Je suis content pour toi.');
    } else
        alert('Désolé, il faut que je file.')

}



function robot3() {

    var reponse = prompt('bonjour quel service souhaitez vous utiliser?\r\n \r\n  1-Faire un retrait \r\n  2-Consultez votre solde \r\n  3-Faire un viremement');



    if (reponse == '1') {
        alert('Indiquez le nombre correspondant au montant que vous souhaitez.');

        1


        reponse = prompt('1-50 \r\n2-100 \r\n3-1000');
        if (reponse === "1") {
            alert('retrait effectué de 50 euros.fermeture de la page');
        }

        if (reponse === "2") {
            alert('retrait effectué de 100 euros');
        }

        if (reponse == "3") {
            alert('retrait non effectué solde insuffisant \r\n veuillez réaprovisionner votre compte');
        }

        reponse = prompt('Voulez vous un reçu ? ');
        if (reponse == "oui") {
            alert('Voici votre reçu \r\n ..... \r\nVotre reçu a été imprimé.\r\n .....\r\n Veuillez le récuperer');
        }

    }

    else if (reponse === '2') {
        alert('votre solde est de 800 euros et 10 centimes \r\n cliquez sur OK pour fermer la page ! ')
    }


    else if (reponse === '3') {

        alert('vous allez effectué un virement vers votre compte Epargne');

        if (reponse === "oui") {
            alert('Indiquez le montant de votre transaction');
        }

        reponse = prompt(' 1-50 \r\n 2-100 \r\n 3-1000');
        if (reponse === "1") {
            alert('virement de 50 euros effectué vers votre compte Epargne.\r\n \r\nfermeture de la page');
        }

        if (reponse === "2") {
            alert('virement de 100 euros effectué vers votre compte Epargne.\r\n \r\nfermeture de la page');
        }

        if (reponse == "3") {
            alert(' virement de 1000 euros vers votre compte Epargne nnon effecué, votre solde est insuffissant.\r\n \r\nfermeture de la page');
        }

    }
}
 robot3()



