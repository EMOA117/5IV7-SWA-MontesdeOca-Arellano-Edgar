const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ',
             'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let key = "";

$(document).ready(function() {
    $('#ci').click(function() {

        key = document.getElementById('llave').value;

        key = key.replace(/ /g, '');

        let mess = document.getElementById('mess').value;

        mess = mess.replace(/ /g, '');

        let newMess = "";

        let keyComplete = "";

        if(revision(mess, key)) {

            for(var i = 0; i<mess.length; i++) {
                keyComplete += key.charAt(i%Number(key.length));

            }
            alert(keyComplete);

            for(var i = 0; i<mess.length; i++) {
                
                let charr = mess.charAt(i);
                let posn = getPosition(charr);

                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);

                let newVal = change(posn, posk);
                newMess += abc[newVal];
            }

            document.getElementById('rs').value = newMess;

        }else{

        }


    });

    $('#de').click(function() {

        key = document.getElementById('llave').value;

        key = key.replace(/ /g, '');

        let mess = document.getElementById('mess').value;

        mess = mess.replace(/ /g, '');

        let newMess = "";

        let keyComplete = "";

        if(revision(mess, key)) {

            for(var i = 0; i<mess.length; i++) {
                keyComplete += key.charAt(i%Number(key.length));

            }
            alert(keyComplete);

            for(var i = 0; i<mess.length; i++) {
                
                let charr = mess.charAt(i);
                let posn = getPosition(charr);

                charr = keyComplete.charAt(i);
                let posk = getPosition(charr);

                let newVal = change(posn, posk);
                newMess += abc[newVal];
            }

            document.getElementById('rs').value = newMess;

        }else{

        }


    });


});

function change(posm, posk){
    let y = (posm+posk)%27;
    return y;
}

function rechange(posm, posk){
    let val = 0;
    if((posm-posk)>=0){
        val = (posm+posk)%27;
    }else{
        val = (posm-posk+27)%27;
    }
    return val;
}

function getPosition(letra){
    let position = abc.indexOf(letra);
    return position;
}

function revision(mess, desp){
    const re = /^([a-zñ?]+([]*[a-zñ?]?['-]?[a-zñ]+)*)$/

    var acc = true;
    if(!re.test(mess)){
        sd();
        acc = false;
    }

    if(!re.test(desp)){
        sdd();
        acc = false;
    }
    if(desp.lenght > message.lenght){
        sz(); 
    }
    return acc;
}

function sd(){
    //alert para decir que el texto no ha sido aceptado
    Swal.fire({
        title:"Error",
        text:"El texto ingreso no ha sido aceptado, ingrese solo minuscilas y evite numeros y simbolos",
        icon: 'error'
    });

    alert("El texto ingreso no ha sido aceptado, ingrese solo minuscilas y evite numeros y simbolos");
}


function sdd(){
    //alert para decir que el texto no ha sido aceptado
    Swal.fire({
        title:"Error",
        text:"La clave ingresa es incorrecta, no cumple con las normas de solo minusculas y no usar numeros y/o simbolos",
        icon: 'error'
    });

    alert("La clave ingresa es incorrecta, no cumple con las normas de solo minusculas y no usar numeros y/o simbolos");
}

function sz(){
    //alert para decir que el texto no ha sido aceptado
    Swal.fire({
        title:"Error",
        text:"La clave no puede ser mayor que el mensaje",
        icon: 'error'
    });

    alert("La clave no puede ser mayor que el mensaje");
}
