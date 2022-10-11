/**
 * @author manuvai.rehua@ut-capitole.fr
 */

function testDisponibilite(id) {
    let element = parseInt(document.getElementById(id).value);
    let isValid = true;
    if (isNaN(element)) {
        isValid = false;
        alert("Veuillez renseigner un vrai nombre");
    } else if (element < 0) {
        isValid = false;
        alert("Veuillez renseigner un nombre positif");
    } else if (element > 20) {
        isValid = false;
        alert("Veuillez renseigner un nombre inférieur à 20 personnes");
    }

    return isValid;
}

function afficherIBAN() {
    displayIBAN(true);
}
function cacherIBAN() {
    displayIBAN(false);   
}

function displayIBAN(bol) {
    let display;
    if (bol) {
        display = 'block';
    } else {
        display = 'none';
    }

    let elt = document.getElementById('divIBAN');
    elt.style.display = display;
}