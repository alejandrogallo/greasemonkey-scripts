// ==UserScript== 
// @name        Troogle 
// @namespace   qupzilla.com 
// @description Google troller
// @include     http://*google.* 
// @version     1.0.0 
// ==/UserScript==

var MESSAGES = ["IS MONITORING YOUR ACTIVITIES", "HATES YOU", "IS WATCHING YOU", "WE KNOW EVERYTHING ABOUT YOU", "WHAT YOU TYPE WILL BE SAVED AND ANALYSED"];
function getRandomMessage() {
  var rand = Math.random();
  var index = Math.floor(rand*MESSAGES.length);
  return MESSAGES[index];
}

var logo = document.getElementById("lga");
var msg = document.createElement("h3");
msg.innerHTML = getRandomMessage();

logo.appendChild(msg);

