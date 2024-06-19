let prixHt, taux, resultat;

prixHt = prompt("prix HT: ");
taux = 1.2;

resultat = prixHt * taux;



console.log(resultat);
document.write("<p> prix TTC est egale " + resultat + "</p>");