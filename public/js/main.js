// exo1

// let jour = prompt("On est quel jour ?")

// switch (jour) {
//     case "lundi":
//       console.log("On est lundi Tu as cours  à MolenGeek et tu as sport en soirée.");
//       default:
//       console.log("on est pas ce jour là");
//  }



// exo2

// let meteo = prompt("il fait beau ou il pleut aujourd'hui ?")

// switch (meteo) {
//     case "il pleut":
//       console.log("Il pleut je prends un parapluie ");
//       break;
//       case " il fait beau":
//       console.log("Il y a un jolie soleil aujourd'hui");
//       default:
//       console.log("on est pas ce jour là");
//  }




// exo3

// let number = prompt("Mettez un chiffre")
// switch (true) {
//   case number % 2 === 0:
//     alert("Le nombre est un multiple de 2");
//     break;
//   case isNaN(number):
//     alert("Ceci n'est pas un nombre");
//     break;
//   default:
//     alert("Le nombre n'est pas un multiple de 2");
// }




// exo4

let nbr1 = prompt("Entrez le premier nombre");
let operateur = prompt("Entrez l'opérateur (+, -, * ou /)");
let nbr2 = prompt("Entrez le deuxième nombre");
nbr1 = parseFloat(nbr1);
nbr2 = parseFloat(nbr2);
let resultat;
switch (operateur) {
  case "+":
    resultat = nbr1 + nbr2;
    break;
  case "-":
    resultat = nbr1 - nbr2;
    break;
  case "":
    resultat = nbr1 - nbr2;
    break;
  case "/":
    resultat = nbr1 / nbr2;
    break;
  default:
    console.log("Opération non valide");
}
console.log(resultat);