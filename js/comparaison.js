// let nbr1, nbr2;

// nbr1 = prompt("Entrez le premier nombre : ");
// nbr2 = prompt("Entrez le 2ème nombre :");

// if (nbr1 > nbr2){
//     alert('le premier nombre est le plus grand');
// }else if (nbr1 < nbr2){
//     alert('le premier nombre est le plus petit');
// }else{
//     alert('le premier nombre est egale au 2éme nombre');
// }

let number1;

number1 = parseInt(prompt("Saisissez votre premier nombre"));

let number2;

number2 = parseInt(prompt("Saisissez votre second nombre"));

if ((!isNaN(number1)) && (!isNaN(number2))) {
    if (number1 < number2) {
        alert("Ton premier nombre est inférieur au second")
        document.write("<p>" + number1 + typeof number1 + " " + number2 + typeof number2 + " " + "Ton premier nombre est inférieur au second</p>")
    } else if (number1 == number2) {
        alert("Ton premier nombre est égal au second")
        document.write("<p>" + number1 + typeof number1 + " " + number2 + typeof number2 + " " + "Ton premier nombre est égal au second</p>")
    } else if (number1 > number2) {
        alert("Ton premier nombre est supérieur au second")
        document.write("<p>" + number1 + typeof number1 + " " + number2 + typeof number2 + " " + "Ton premier nombre est supérieur au second</p>")
    }
} else {
    alert("Vous n'avez pas saisi de chiffres!");
}



   