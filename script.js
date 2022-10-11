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
