"use strict";

// Matematines Operacijos
const sk1 = 27;
const sk2 = 3;

const suma = sk1 + sk2; //sudetis
console.log(suma);

const skirtumas = sk1 - sk2; // atimtis
console.log(skirtumas);

const sandauga = sk1 * sk2; // sandauga
console.log( sandauga);

const dalmuo = sk1 / sk2; // dalyba
console.log(dalmuo);

console.log( (suma - skirtumas) * sandauga + sk2);

console.log('---------------------------------------');

// Tekstines Operacijos

const vardas = 'Vardenis';
const pavarde = 'Pavardenis';
const pilnasVardas = vardas + ' ' + pavarde;

console.log(vardas);
console.log(pavarde);
console.log(pilnasVardas);

// Mano megstama spalva yra "juoda".

const spalva = 'raudona';
// const spalvosSakinys = 'Mano megstama spalva yra "juoda".';
const spalvosSakinys = 'Mano megstama spalva yra "' + spalva + '".';

console.log(spalvosSakinys);

// Skaicius '20' yra lyginis.

const skaicius = 20;
// const skaiciausSakinys = "Skaicius '20' yra lyginis.";
const skaiciausSakinys = "Skaicius '" + skaicius + "' yra lyginis.";

console.log(skaiciausSakinys);

// skaicius '2' ir skaicius "trys" yra geri skaiciai.
const du = 2;
const trys = 'trys';
const sakinys = `skaicius '${du}' ir skaicius "${trys}" yra geri skaiciai.`;
console.log(sakinys);

console.log('------------------------');

// Sarasai (array)

const pazymiai = [10, 8, 7, 6, 3, 4, 8, 9];
const abc = ['a', 'b', 'c', 'd', 'e'];

console.log(pazymiai);
console.log(abc);

console.log( 'Pirmas pazymys:', pazymiai[0] );
console.log( 'Antras pazymys:', pazymiai[1] );
console.log( 'Trecias pazymys:', pazymiai[2] );

console.log('Pirma raide', abc [0]);
console.log('Antra raide', abc [1]);
console.log('Trecia raide', abc [2]);

const pazymiuSuma = pazymiai[0]+ pazymiai[1] + pazymiai[2]+ pazymiai[3] + pazymiai[4] + pazymiai[5] + pazymiai[6] + pazymiai[7];

console.log('Pazymiu suma', pazymiuSuma);

let abcSakinys = '';

abcSakinys = abcSakinys + abc[0];
abcSakinys = abcSakinys + abc[1];
abcSakinys = abcSakinys + abc[2];
abcSakinys = abcSakinys + abc[3];
abcSakinys = abcSakinys + abc[4];
console.log('Visa ABC:', abcSakinys);





