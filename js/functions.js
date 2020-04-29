"use strict";

function tusciaFunkcija() {
    return false;
}
tusciaFunkcija();

const kinas = 'Matrix'
console.log(kinas);


// console.log(tusciaFunkcija());

const kaGrazinoTusciaFunkcija = tusciaFunkcija();

console.log(kaGrazinoTusciaFunkcija);

console.log('-----------------');

function daugyba ( pirmas, antras) {
    // Validuojame ieinanciu duomenis
    if (typeof(pirmas) !== 'number') {
        return console.error ('ERROR: pirma reiksme turi buti skaicius');
    }
    if (typeof antras !== 'number') {
        return console.error ('ERROR: antra reiksme turi buti skaicius');
    }
    if (isNaN(pirmas) === true) {
        return console.error ('ERROR: pirma reiksme turi buti tikras skaicius');
    }
    if (''+antras ==='NaN') {
        return console.error ('ERROR: antra reiksme turi buti tikras skaicius');
    }
    if (isFinite(pirmas) === false) {
        return console.error ('ERROR: pirma reiksme turi buti ne begalybe');
    }
    if (''+antras ==='Infinity') {
        return console.error ('ERROR: antra reiksme turi buti ne begalybe');
    }
    // realizuojame funkcijos logika
    const result = pirmas * antras;
    //graziname rezultata
    return result;
}

console.log(daugyba());
console.log(daugyba(2, 2));
console.log(daugyba(3, 5));
console.log(daugyba(-3, 5));
console.log(daugyba(3, -5));
console.log(daugyba(-3, -5));
console.log(daugyba('laba','diena'));
console.log(daugyba('lalas', 15));
console.log(daugyba(15,'nana'));
console.log(daugyba(-3, 2.546));


console.log(daugyba(Infinity, -1.5));
console.log(daugyba(48, Infinity));
console.log(daugyba(Infinity, Infinity));

console.log('-------Skaitmenu kiekis skaiciuje---------------');

function skaitmenuKiekisSkaiciuje( number ){
    // validavimas
    if ( typeof(number) !== 'number' ||
         isFinite(number) === false ) {
        return console.error('ERROR: reikalingas tikras skaicius');
    }

    // logika
    const skaiciusTekstu = ''+number;
    let count = skaiciusTekstu.length;

    // jei tekstineje skaiciaus reprezentacijoje yra kablelis, tai count--
    // pavyzdys, kaip ieskoti su ciklu (siam scenarijuje neverta naudoti)
    // for ( let i=0; i<skaiciusTekstu.length; i++ ) {
    //     if ( skaiciusTekstu[i] === '.' ) {
    //         count--;
    //         break;
    //     }
    // }
    if ( number % 1 !== 0 ) {
        count--;
    }

    // jei neigiamas skaicius, tai count--
    if ( number < 0 ) {
        count--;
    }

    // rezultato grazinimas
    return count;
}

console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );

console.log( skaitmenuKiekisSkaiciuje( 5 ), '->', 1 );
console.log( skaitmenuKiekisSkaiciuje( 781 ), '->', 3 );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ), '->', 11 );
console.log( skaitmenuKiekisSkaiciuje( 3.1415 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -12345 ), '->', 5 );
console.log( skaitmenuKiekisSkaiciuje( -3.1415 ), '->', 5 );


console.log('kas negerai su tokiu skaiciume??? 🤔🤔');
console.log( skaitmenuKiekisSkaiciuje( 10000000000000000000000000000000000000000 ), '->', 31 );