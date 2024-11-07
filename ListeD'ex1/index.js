// Exercice 1

function addition(a, b) {
	return a + b;
}
console.log(addition(2, 3));

// Exercice 2

function salutation(nom) {
	return "Bonjour " + nom;
}
console.log(salutation("Alice"));

// Exercice 3

function estPair(nombre) {
	return nombre % 2 === 0;
}
console.log(estPair(4));
console.log(estPair(7));

// Exercice 4

function aireRectangle(longueur, largeur) {
	return longueur * largeur;
}
console.log(aireRectangle(5, 3));

// Exercice 5

function estMajuscule(chaine) {
	return chaine === chaine.toUpperCase();
}
console.log(estMajuscule("HELLO"));
console.log(estMajuscule("Hello"));

// Exercice 6

function maxDeuxNombres(a, b) {
	return a, b;
}
console.log(maxDeuxNombres(5, 10));

// Exercice 7

function difference(a, b) {
  return (a - b)
}
console.log(difference(10, 3));

// Exercice 8

function convertirEnCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9
}
console.log(convertirEnCelsius(100));

// Exercice 9

function estMajeur(age) {
  return (age >= 18)
}
console.log(estMajeur(20));
console.log(estMajeur(16));

// Exercice 10

function maxTroisNombres(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maxTroisNombres(3, 7, 5));


// Exercice 11

function calculer(a, b, operation) {
  return operation(a, b);
}

function addition(x, y) {
  return x + y;
}

function multiplication(x, y) {
  return x * y;
}

console.log(calculer(5, 3, addition));
console.log(calculer(5, 3, multiplication));


// Exercice 12

function estVoyelle(c) {

  return "aeiouAEIOU".includes(c);
}

function filtrerTexte(chaine, filtre) {

  let resultat = "";
  for (let i = 0; i < chaine.length; i++) {
    if (filtre(chaine[i])) {
      resultat += chaine[i];
    }
  }
  return resultat;
}

console.log(filtrerTexte("Bonjour", estVoyelle));

// Exercice 13



// Exercice 14



// Exercice 15



// Exercice 16



// Exercice 17



// Exercice 18



// Exercice 19



// Exercice 20



// Exercice 21



// Exercice 22



// Exercice BONUS (calculatrice)

let pn = Number(prompt("Quel est votre premier nombre ?"));
let dn = Number(prompt("Quel est votre deuxième nombre ?"));
let cc = prompt("Voulez-vous + / - * ");
let re = 0;

function calculatrice(pn, dn, cc) {

  if (cc == "+") {
    re = pn + dn;
    console.log(`Vous avez additionné vos deux nombres. Le résultat est ${re}`);
  } else if (cc == "-") {
    re = pn - dn;
    console.log(`Vous avez soustrait vos deux nombres. Le résultat est ${re}`);
  } else if (cc == "/") {
    re = pn / dn;
    console.log(`Vous avez divisé vos deux nombres. Le résultat est ${re}`);
  } else if (cc == "*") {
    re = pn * dn;
    console.log(`Vous avez multiplié vos deux nombres. Le résultat est ${re}`);
  } else {
    console.log("Opérateur non valide");
  }

  return re;
}

calculatrice(pn, dn, cc);
