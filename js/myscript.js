/* STRICT MODE */
"use strict";

// ASSEGNAZIONI VARIABILI COSTANTI PER LA STAMPA
const result = "Il prezzo del biglietto &egrave; "
const euroValute = " &euro;"

// ASSRGNAZINI VARIABILI LET PER INTERAZIONE CON I DATI UTENTE
var distanceKm = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));
var eta = parseInt(prompt("Quanti anni hai ?"));
var priceKm = 0.21;
var ticketSales = priceKm * distanceKm;

// PRIMA CONDIZIONE PER I MINORI DI 18 ANNI
if (eta <= 18) {
    document.getElementById('prezzoFinale').innerHTML = result + ((ticketSales / 100) * 80) + euroValute;
}
// SECONDA CONDIZIONE PER OVER 65
else if (eta >= 65) {
    document.getElementById('prezzoFinale').innerHTML = result + ((ticketSales / 100) * 60) + euroValute;
}
//ALTRIMENTI SE NON RIENTRANO IN QUESTE FASCE SEGUI QUESTO PREZZO
else {
    document.getElementById('prezzoFinale').innerHTML = result + (ticketSales) + euroValute;
}