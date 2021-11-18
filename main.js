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
    document.getElementById('stringUpper').innerHTML = 'Upper: ' + string.toUpperCase();
}

function lower(){
    var string = document.getElementById('string').textContent;
    document.getElementById('stringLower').innerHTML = 'Lower: ' + string.toLowerCase();
}

function capital(){
    var string = document.getElementById('string').textContent;
    document.getElementById('stringCapital').innerHTML = 'Capital: ' + string[0].toUpperCase() + string.substring(1);
}

function proper(){
    var string = document.getElementById('string').textContent;
    var arr = string.split(' ');
    console.log(arr);
    arr.forEach(element => {
        document.getElementById('stringProper').innerHTML = element[0].toUpperCase() + element.substring(1);
    });
}