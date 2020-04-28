"use strict";

const a = 7;
const b = 9;

//palyginimo operatoriai
//Rekomenduojama >, < <=, >=, !=(nelygu), ===, !==
//Nerekomenduojama ==, !=

// if ( salyga ) {
//     //logika kuria reikia ivikdyti jei tenkina salyga
// }

// if ( a>b) {
//     console.log('taip teisinga a yra daugiau uz b')
// }
// else {
//     console.log('a yra ne daugiau uz b');
// }

if ( a>b ) {
    console.log('taip a yra daugiau uz b');
    
}
else if ( a===b ) {
    console.log('a yra lygu b');
}
else {
    console.log('ne, a maziau uz b');
}

let diena = 0;

if ( diena === 0 ) {
    console.log('piramdienis');
} else if ( diena === 1) {
    console.log('antradienis'); 
}else if ( diena === 2) {
    console.log('Treciadienis'); 
}else if ( diena === 3) {
    console.log('Ketv'); 
}else if ( diena === 4) {
    console.log('Penkt'); 
}else if ( diena === 5) {
    console.log('Sestadieis'); 
}else if ( diena === 6) {
    console.log('Sekamdienis'); 
} else {
    console.log('tokia diena neegzistuoja');
}

const vardas = "Tomas";

if ( vardas === 'Tomas') {
console.log('Vardas sutapo');

}else {
console.log('nesutampa');
}

console.log('-----------');


if ( true == true) {
    console.log('sutapo');
    
    }else {
    console.log('nesutampa');
    }

    console.log('--------');

 // switch

const akys = 'melyna';
switch ( akys ) {
    case 'ruda':
        console.log('melagis');
        break;
        
     case 'raudona':
         console.log('vampyras');
         break;
         
     case 'zalia':
         console.log('greiti');
         break;
         
     case 'melyna':
         console.log('plaukikai');    
         break; 

    default:
        console.log('ne veikia');
        break;
        
 }

 if ( akys === 'rudos' ) {
    console.log('melagis');
} else {
    if ( akys === 'melyna' ) {
        console.log('mldc');
    } else {
        if ( akys === 'raudonos' ) {
            console.log('vampyras');
        } else {
            if ( akys === 'zalia' ) {
                console.log('dar nevirtos');
            } else {
                console.log('a tu turi akis? 🤔');
            }
        }
    }
}