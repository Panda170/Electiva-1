function evalu(a){
    return 1/a; 
}

function raiz(a){
    return Math.sqrt(a);
}

function elevar(a){
    return Math.pow(a,2);
}
    
function signo(a){
    return (a*-1);
}

function porcentaje(x){
    return x/100;
}

function borrar(a){
    a= a.substring(0,a.length-1);
    return a;
}
function add(info) {
    document.getElementById('ans').innerHTML += info;
}
function getAns() {
    return  document.getElementById('ans').innerHTML;
}
function equals(info) {
    document.getElementById('ans').innerHTML = (info + "");
}