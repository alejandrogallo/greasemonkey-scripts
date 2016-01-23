// ==UserScript== 
// @name        Console 
// @namespace   qupzilla.com 
// @description Quick console prompt
// @include     *
// @version     1.0.0 
// ==/UserScript==

////////////////////////////
//  FUNCTION DEFINITIONS  //
////////////////////////////

function init_ace() {
  //Ace integration
  console.log("Integrating with ace");
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/twilight");
  editor.getSession().setMode("ace/mode/javascript");
  editor.setKeyboardHandler("ace/keyboard/vim");
  //aut completion
  ace.require("ace/ext/language_tools");
  editor.setOptions({
    enableBasicAutocompletion: true
  });
  editor.renderer.setShowGutter(false);
  //editor.getKeyboardHandler().defaultKeymap.unshift({
    //keys: "Esc",
    //toKeys: "kj",
    //type: "keyToKey",
    //user: true
  //});
}

function toggleEditor() {
  $(input).toggle();
  $(submitbtn).toggle();
  //$(title).toggle();
  (toggle.innerHTML=="-")?(toggle.innerHTML="+"):(toggle.innerHTML="-");
}
function initJquery_ui() {
  //$(input).resizable();
  $(form).resizable();
  $(form).draggable();
  //Erase this line if by default you want the editor on
  toggleEditor();
}

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.src=url;
  document.body.appendChild(script);
  script.onload = function () {
    console.log("Loaded ===> "+url);
    callback && callback();
  }
}

function evalScript() {
  var editor = ace.edit("editor");
  var contents = editor.getValue();
  console.log(contents);
  eval(contents);
  //this is for the form submission
  return false;

}

////////////////////
//  Loading Libs  //
////////////////////

loadScript("http://cdnjs.cloudflare.com/ajax/libs/ace/1.2.2/ace.js", init_ace);
loadScript("http://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js", loadJqueryUI);
function loadJqueryUI() { loadScript("//code.jquery.com/ui/1.11.4/jquery-ui.js", initJquery_ui); }

////////////////////////
//  Element creation  //
////////////////////////

var form = document.createElement("form");
var input = document.createElement("div");
var title = document.createElement("span");
var submitbtn = document.createElement("input");
var close = document.createElement("button");
var toggle = document.createElement("button");

/////////////////
//  Appending  //
/////////////////

document.body.appendChild(form);
form.appendChild(title);
form.appendChild(input);
form.appendChild(submitbtn);
form.appendChild(close);
form.appendChild(toggle);

/////////////
//  LOGIC  //
/////////////


close.innerHTML = "&times;";
close.onclick=function(){
  form.parentNode.removeChild(form);
}

toggle.innerHTML="-";
toggle.onclick= toggleEditor;

form.onsubmit=evalScript;
title.innerHTML=">_";
submitbtn.type="submit";
submitbtn.value="ok";



//////////////////
//  form style  //
//////////////////

form.style.position="fixed";
form.style.left="0";
form.style.top="3em";
form.style.zindex="100000000000000000000000000000000000000000000000000000000000000000000000000000";
form.style.backgroundColor="rgba(0,0,0,.8)";
form.style.borderRadius="0px";

///////////////////
//  Input Style  //
///////////////////

input.style.width="30em";
input.style.height="20em";
input.id="editor";
input.style.marginTop="1em";


////////////////////
//  Submit style  //
////////////////////

submitbtn.className="btn btn-warning";

///////////////////
//  Title style  //
///////////////////

title.style.margin="4%";
title.style.color="white";
title.style.borderRadius="5px";
title.style.padding=".3em";
title.style.backgroundColor="red";
title.style.textAlign="center";
title.style.boxShadow="orange 1px 0px 1px";

///////////////////
//  Close Style  //
///////////////////

close.className="btn btn-danger";

////////////////////
//  Toggle style  //
////////////////////

toggle.className="btn btn-danger";

