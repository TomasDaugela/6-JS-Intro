'use strict';

//ciklas - kazkas, kas yra kartojama
    // kas tas kazkas?
    //ka kartoja?
    // kiek kartu?

for ( let i=0; i<5; i++ ) {
    console.log( i );
}
for ( let i=0; i<5; i=i+1 ) {
    console.log( i );
}

console.log('------------');

let k=0;
console.log(k);
k++;
console.log(k);
k++;
console.log(k);
k++;
console.log(k);
k++;
console.log(k);

console.log('-------------');


let pazimys = 7;
pazimys++;
console.log( "Pazimys: " + pazimys);


for (let p=2000; p<2021; p++) {
    console.log('Metai', p);
    
}


console.log('------Suma Intervale------');

const nuo = 574;
const iki = 815;
let suma = 0;

for ( let i=nuo; i<=iki; i=i+1 ) {
    suma = suma + i;
}
console.log('suma: ', suma);

console.log('--------Atbulas tekstas--------');

const tekstas = 'majonezas';
const tekstoIlgis = tekstas.length - 1;
let atbulas = '';

for ( let i=tekstoIlgis; i>=0; i-- ) {
    atbulas = atbulas + tekstas[i];
}
console.log(`Tekstas "${tekstas}" atbulai yra "${atbulas}". `);

console.log('-----------------');

for (let i=0; i<=11; i++) {
    console.log(i, "liekana", i % 3); 
}
