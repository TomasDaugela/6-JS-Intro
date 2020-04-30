let logs = 0;
let superMalkos = 0;
let pinigai = 0;
        
function parduotiMalkas() {

    if (logs > 0) {
        logs--;
        pinigai++;
        document.getElementById('malkos').value = logs;
        document.getElementById('pinigai').value = pinigai;
    }

}

function parduotiSuperMalkas() {
    
    if (superMalkos > 0) {
        superMalkos--;
        pinigai = pinigai+10;
        document.getElementById('superMalkos').value = superMalkos;
        document.getElementById('pinigai').value = pinigai;
    }

}

        function Random() {
        let rnd = Math.floor(Math.random() * 10);
        document.getElementById('tb').value = rnd;
        if (rnd === 3) {
            superMalkos ++;
            document.getElementById('superMalkos').value = superMalkos;
        }else {
            logs++;
            document.getElementById('malkos').value = logs;
        }
    }

    