var result;
var a = prompt("Unesite prvi broj: ");
var znak = prompt("Unesite znak operacije koju želite izvršiti (+, -, *, /);");
var b = prompt("Unesite drugi broj: ");

if (znak == "+") {
    result = Number(a) + Number(b);
    alert("Rezultat sabiranja vaša dva broja je: " +result)
}

else if (znak == "-") {
    result = Number(a) - Number(b);
    alert("Rezultat oduzimanja vaša dva broja je: " +result)
}

else if (znak == "*") {
    result = Number(a) * Number(b);
    alert("Rezultat množenja vaša dva broja je: " +result)
}

else if (znak == "/", b == "0") {
    alert("Nije moguće deljenje sa nulom!")
}

else if (znak == "/") {
    result = Number(a) / Number(b);
    alert("Rezultat deljenja vaša dva broja je: " +result)
}