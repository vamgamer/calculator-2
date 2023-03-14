function insert(x){
    var numero = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = numero + x
}
function clian(){
    document.getElementById('display').innerHTML = ""
}
function back(){
    var back = document.getElementById('display').innerHTML
    document.getElementById('display').innerHTML = back.substring(0, back.length -1)
}
function calcular(){
    var display = document.getElementById('display').innerHTML
    if(display){
        document.getElementById('display').innerHTML = eval(display)
    }
}