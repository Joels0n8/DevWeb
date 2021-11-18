function send(){
    var string = document.getElementById('inputString');
    document.getElementById('string').innerHTML = string.value;
    document.getElementById('inputString').value = '';
}

function clean(){
    document.getElementById('string').innerHTML = '';
}

function md5(){
    var string = document.getElementById('string').textContent;
    console.log(string);
}

function base64(){
    var string = document.getElementById('string').textContent;
}

function upper(){
    var string = document.getElementById('string').textContent;
    document.getElementById('stringUpper').innerHTML = 'Upper Case: ' + string.toUpperCase();
}

function lower(){
    var string = document.getElementById('string').textContent;
    document.getElementById('stringLower').innerHTML = 'Lower Case: ' + string.toLowerCase();
}

function capital(){
    var string = document.getElementById('string').textContent;
    document.getElementById('stringCapital').innerHTML = 'Capital Case: ' + string[0].toUpperCase() + string.substring(1);
}

function proper(){
    var string = document.getElementById('string').textContent;
    var arr = string.split(' ');
    console.log(arr);
    
    document.getElementById('stringProper').innerHTML = 'Proper Case: '
    for(var i = 0; i < arr.length; i++){
        var data = document.getElementById('stringProper').innerHTML;
        document.getElementById('stringProper').innerHTML = data + ' ' + arr[i].substring(0,1).toUpperCase() + arr[i].substring(1);
    }
}