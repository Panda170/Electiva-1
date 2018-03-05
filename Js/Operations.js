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

function borrar(){
    var ans = document.getElementById('ans').innerHTML;
    document.getElementById('ans').innerHTML = ans.substring(0,ans.length-1);
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

function clearAns() {
    document.getElementById('ans').innerHTML = "";
}