function insert (num){
    var data = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = data + num;
}

function clean (){
    document.getElementById('result').innerHTML = "";
}

function back (){
    var data = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = data.substring(0, data.length-1);
}

function truncation (){
    var data = document.getElementById('result').innerHTML;
    const ar = data.split('.');
    data = ar[0] + '.' + ar[1].substring(0, 1);
    document.getElementById('result').innerHTML = data;
}

function radiciation (num){
    var data = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = data + num;
    calc();
}

function calc(){
    var data = document.getElementById('result').innerHTML;
    if(data){
        document.getElementById('result').innerHTML = eval(data);
    }
}
