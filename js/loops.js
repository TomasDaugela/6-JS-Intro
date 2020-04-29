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

const tekstas = 'Bangladesas';
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

//Loop YT
console.log('----------Youtube------------');

const names = ['Tomas','Joe','Bob','Dodo']

for ( let i = 0; i<names.length; i++ ) {
    console.log(names [i]);
    if (i === 3) break;
}

console.log('-----------');


for (name of names) {
    console.log(name);
    
}

console.log('---------------');

let o = 0;
while (o < 10) {
    o++;
    if (o === 5) continue;
    console.log(o);
}

console.log('-----Dalyba be Liekanos------');

const from = 1;
const till = 900000;
const divider = 3;
let count = 0;

for ( let i=from; i<=till; i++ ) {
        if (i % divider === 0 ) {
            count++;
    }
}
const answer =`Skaiciu intervale tarp ${from} ir ${till}, besidalinanciu be liekanos is ${divider} yra ${count} vienetai.`;

console.log(answer);
