var Objekat = {
    type : "Fiat", 
    model : "500", 
    color : "white"
};

var Ob = document.getElementById('ob');
        
    for (var bla in Objekat){
        Ob.innerHTML += bla + ' = ' + Objekat[bla] + '<br>';
    };



function alertName(){
    var Name = document.forms[0].nametext.value;
    var name = Name.charAt(0).toUpperCase() + Name.slice(1);
    if (name == "Steve"){
        alert("Hello Steve. Welcome to Machine");
    }
    else if (name == "Tim"){
        alert("Hello Tim!");
    }
    else{
        alert("Hello " + name + ".");
    }
    return true;
};

function inputNum(){
    var broj = document.forms[1].broj.value;
    if (isNaN(broj)){
        if (broj.match(/one|two|three|four|five|six|seven|eight|nine|ten/)){
            alert('Iako je ovo broj, nije broj za mene!');
        }
        else{
            alert(broj + ' Ovo nije broj!');
        }
    }
    else if (broj > 99 || broj < 51){
        alert("Taj broj " + broj + " nije izmedju 50-100" );
    }
    else{
        alert('Bravo! ' + broj);
    };
}



var one= document.getElementById("one")
        
var h = 0xe, i=0x2, j=h*i;
one.innerHTML = "0xe * 0x2 = " + j + "<br><br>";

function RandomNumber(min, max){

    return Math.round(Math.random() * (max-min) + min )
}
one.innerHTML += "Random broj izmedju 1 i 10 je: " + RandomNumber(1,10) + "<br><br>";

var myDate = new Date();
var dateString = myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();
one.innerHTML += "Hello - Page Rendered on " + dateString + "<br>";

var today = new Date();
var then = new Date();
then.setFullYear(2020,0,1);
var diff = then.getTime() - today.getTime();
diff = Math.floor(diff / (1000 * 60 * 60 * 24));
one.innerHTML += "There are " + diff + " days until 1/1/2020 <br><br>";

var myDate1 = new Date();
one.innerHTML += "<hr><br>" + myDate1.toLocaleDateString() + " -> toLocaleDateString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toLocaleString() + " -> toLocaleString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toGMTString() + " -> toGMTString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toLocaleTimeString() + " -> toLocaleTimeString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toString() + " -> toString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toISOString() + " -> toISOString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toDateString() + " -> toDateString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toUTCString() + " -> toUTCString <br><br>";
myDate1 = new Date();
one.innerHTML += myDate1.toTimeString() + " -> toTimeString <br><br><hr><br>";

var myString = "http://www.braingia.org";
var myRegex = /http:\/\/\w+\.(.*)/i;
var results = myRegex.exec(myString);
one.innerHTML += "Isecena rec regularnim izrazom je : " + results[1] + "<br><br>";
console.log(results);


var bottom = new Date();
var Diff = (bottom.getTime() - now)/1000;
var finalTime = Diff.toPrecision(5);
one.innerHTML += "Page randered in " + finalTime + " seconds.";