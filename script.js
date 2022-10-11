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
}
