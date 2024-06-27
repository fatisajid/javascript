//  1er correction
let month = parseInt(prompt("Saisissez un mois entre 1 et 12"));

if (month == 1){
    alert("y'a 31 jour au mois de janvier");
}else if (month == 2){
    alert("y'a 28 jour au mois de février");
}else if (month == 3){
    alert("y'a 31 jour au mois de mars");
}else if (month == 4){
    alert("y'a 30 jour au mois de avril");
}else if (month == 5){
    alert("y'a 31 jour au mois de mai");
}else if (month == 6){
    alert("y'a 30 jour au mois de juin");
}else if (month == 7){
    alert("y'a 30 jour au mois de juillet");
}else if (month == 8){
    alert("y'a 31 jour au mois de aout");
}else if (month == 9){
    alert("y'a 30 jour au mois de septembre");
}else if (month == 10){
    alert("y'a 30 jour au mois de octobre");
}else if (month == 11){
    alert("y'a 30 jour au mois de novembre");
}else if (month == 12){
    alert("y'a 31 jour au mois de décembre");
}else {
    alert ("tu dois entre un nombre de 1 à 12");
}

// 2eme correction

// let mois = parseInt(prompt("Quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));

// if (mois === 2) { // si on a choisi février => chiffre 2
//     document.write("Le mois numéro " + mois + " fait 28 jours.");
// } else if ((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){ // si on a choisi un mois qui fait 30 jours
//     document.write("Le mois numéro " + mois + " fait 30 jours.");
// } else if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)) { // si on a choisi un mois qui fait 31 jours
//     document.write("Le mois numéro " + mois + " fait 31 jours.");
// } else {
//     document.write("Votre choix " + mois + " n'est pas dans le calendrier.");
// }

// 3éme correction

// let mois = parseInt(prompt("Enregistrez le mois."));
// console.log(mois);

// switch(mois){
//     case 1:
//         alert("30 jours");
//         break;
//     case 2:
//         alert('28 jours')
//         break;
//     case 3:
//         alert('30 jours');
//         break;
//     case 4:
//         alert('30 jours');
//         break;
//     case 5:
//         alert('30 jours');
//         break;
//     case 6:
//         alert('30 jours');
//         break;
//     case 7:
//         alert('30 jours');
//         break;
//     case 8:
//         alert('30 jours');
//         break;
//     case 9:
//         alert('30 jours');
//         break;
//     case 10:
//         alert('30 jours');
//         break;
//     case 11:
//         alert('30 jours');
//         break;
//     case 12:
//         alert('30 jours');
//         break;
//     default:
//         alert('Saisissez un numéro valide');
// }