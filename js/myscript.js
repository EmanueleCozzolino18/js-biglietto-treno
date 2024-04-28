/* STRICT MODE */
"use strict";

// ASSEGNAZIONE VARIABILI COSTANTI PER LA STAMPA IN HTML
const currentId = document.getElementById("prezzoFinale");
const currentCont = currentId.innerHTML;

// ASSEGNAZIONI VARIABILI COSTANTI PER LA STAMPA
const result = "Il prezzo del biglietto &egrave; "
const euroValute = " &euro;"

// ASSRGNAZINI VARIABILI LET PER INTERAZIONE CON I DATI UTENTE
var distanceKm = parseInt(prompt("Quanti chilometri vuoi percorrere ?"));
var eta = parseInt(prompt("Quanti anni hai ?"));
var priceKm = 0.21;
var ticketSales = priceKm * distanceKm;