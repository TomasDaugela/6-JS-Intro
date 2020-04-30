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

console.log('------------YT------------');

// function go () {
//     alert ('hi');
//     alert ('hello');
// }
// go();

//arguments
//Dry Dont repeat yourself
function go (name, age) {
        if (age <= 20) {
            return  name + "Maziau uz 20";
        }else {
            return name;
        }
    }
    console.log( go('Tomas',19 ) );

 function add (first, second) {
        return first+second;
    }
    var sum = add (1,2);

    console.log(go(sum));

    console.log('-----------Didziausiais Skaicius Sarace-------');


    function didziausiasSkaiciusSarase(list) {
        if ( Array.isArray(list)===false) {
            return console.log('Error: turi buti array');

        } if (list.length ===0) {
            console.log('Error: array negali buti tuscias');      
        }
        //'biggest' maziausias, bet ne normalus skaicius
        //einame per skaiciu  sarasa
             //tikriname ar einamasis skaicius yra skaicius
                 // jie ne:
                      //einam prie sekancio saraso nario
         //tikriname ar einamasis skaicius didesnis uz'Biggest'
             //jei taip:
                    //'biggest'= einamasis skaicius
    // po visko patikrinam ar tai noramlus skaivius
        
        let biggest = -Infinity;
        for ( let i=0; i<list.length; i++) {
            const einamasisSkaicius = list[i];  
            if (isFinite(einamasisSkaicius) === false) {
                continue;
                }
            if (einamasisSkaicius > biggest) {
                biggest = einamasisSkaicius;
            }
        }

        if (biggest === -Infinity) {
            return console.error('ERROR: Sarase turi but bent vienas tikras skaicius')
        }

        return biggest;
    
}

    console.log(didziausiasSkaiciusSarase([1]),'>',1);
    console.log(didziausiasSkaiciusSarase([1,2,3]),'>',3);
    console.log(didziausiasSkaiciusSarase([1-5,78,14,0,18]),'>',18);
    console.log(didziausiasSkaiciusSarase([55,69,47,51,121]),'>',121);
    console.log(didziausiasSkaiciusSarase([55,69,555515,51,121]),'>',555515);
    console.log(didziausiasSkaiciusSarase([55,69,Infinity,51,121]),'>',121);
    console.log(didziausiasSkaiciusSarase([Infinity,69,47,51,1201]),'>',1201);
    console.log(didziausiasSkaiciusSarase([Infinity. Infinity, Infinity]),'>','Error');

    console.log('-------Isrinkti Raides------');

function isrinktiRaides (text, step) {
//validacija

     // if (text.length === 0) {
    if (text === '') {
        return console.error('Error: tekstas negali buti tuscias');
            
    }
    if ( typeof(text)!== 'string' ) {
        return console.error('Error: pirma reiksme turi buti teksto tipo');
    }
    if (typeof(step) !=='number') {
        return console.error('Error: antra reiksme turi buti normalus skaicius')
    }
    if (step ===0) {
        return console.error('Error:zingnis negali buti nulinis');
    }
    if ( step > text.length){
        return console.error('ErroR: zingnis negali buti didesnis uz turimo teksto ilgi');
    }
    if ( step % 1 !==0){
        return console.error('ErroR: zingnis turi buti sveikasis');
    }
   
//logika
    let newWord = '';
    for ( let i=step-1; i<text.length; i=i +step ){
        
            newWord = newWord + text[i];
        }
    return newWord;
}
console.log(isrinktiRaides(1561,2));
console.log(isrinktiRaides('adc',0));
console.log(isrinktiRaides('abc', 4));
console.log(isrinktiRaides('',3));
console.log(isrinktiRaides('abcdefghijkl',1.5),'>',"cfil");
console.log(isrinktiRaides('abcdefghijkl',Infinity));
console.log(isrinktiRaides('abcdefghijkl',NaN));

console.log(isrinktiRaides('abcdefg',2),'>',"bdf");
console.log(isrinktiRaides('abcdefghijkl',3),'>',"cfil");
console.log(isrinktiRaides('abcdefghijkl',1),'>',"abcdefghijkl");


// console.log(isrinktiRaides('abcdefghijkl',-3),'>',"jgda");

console.log('---------DALYBA---------');

function dalyba (a,b) {
    if (!isFinite(a) ||
       !isFinite(b) ){
        return console.error('Error: duok normalius skaicius');
        
    }
    if (b ===0) {
        return console.error('Error: dalyba is 0 nepageidautina');
        
    }
    return a / b;
}
console.log(dalyba(Infinity,4));
console.log(dalyba(NaN,4));
console.log(dalyba(21,0));
console.log(dalyba(8,4));
console.log(dalyba(21,2));



//tas pats
// isFinite(a) === false
// !isFinite(a)

//codewars.com




    
    