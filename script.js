/**
 * @author manuvai.rehua@ut-capitole.fr
 */

function testDisponibilite(id) {
    let element = parseInt(document.getElementById(id).value);
    if (isNaN(element)) {
        return alert("Veuillez renseigner un vrai nombre");
    }
    if (element < 0) {
        return alert("Veuillez renseigner un nombre positif");
    }
    if (element > 20) {
        return alert("Veuillez renseigner un nombre inférieur à 20 personnes");

    }
}
