/*
*		SAML - Util functions
*
*
*/

var race = "0";

var RecyclerPayLoad = new Array(500,1000,800,20000);
var RecyclerShipLocation = new Array(3,4,4,4);
var RecyclerName = new Array("Terran Recycler","Recycler","Octopon","Terran Large Recycler");

function GetRace(){
	for (var i = document.styleSheets.length-1; i >= 0; i--) {
		if (document.styleSheets[i].href.match('terran')) { race = 1; break; }
		if (document.styleSheets[i].href.match('titan')) { race = 2; break; }
		if (document.styleSheets[i].href.match('xen')) { race = 3; break; }
	}
}

function DeleteElement(e){
	if (e)
		e.parentNode.removeChild(e);
}

function addStyleToPage(cssText){
	var HeadElement = document.getElementsByTagName('head')[0];
	if (HeadElement){
		var aStyle = document.createElement('style');
		if (aStyle){
			aStyle.type = 'text/css';
			aStyle.innerHTML = cssText;
			HeadElement.appendChild(aStyle);
		}
	}
}

function addStyleToElement(elementId,cssText){
	var Elem = document.getElementById(elementId);
	if (Elem) {Elem.setAttribute('style',cssText);}
	else {elementId.setAttribute('style',cssText);}
}

function jsHideDiv(DivName){
	var aDiv = document.getElementById(DivName);
	if (aDiv.style.display == 'block') {aDiv.style.display = 'none';}
	else {aDiv.style.display = 'block';}	
}

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}

function PadDigits(n) 
{ 
	n = n.toString();         
	if (n.length < 2) { n = "0" + n; } 
	return n.toString(); 
} 

function showDays(days) {
	var fullHours = Math.round(24 * days);
	var hours = fullHours % 24;
	days = Math.floor(fullHours / 24);
	var minutes = hours % 60;	
	var a = [];
	if (days) {a.push(days);}
	/*if (hours) {a.push(PadDigits(hours));}*/
	if (!a.length) {
		a.push(PadDigits(hours) + " h");
		a.push(PadDigits(minutes) + " m");
		return a.join(":");
	}
	return a.join(":") + " day(s)";
}

//String.prototype.trim = function( text ) {return (text || "").replace( /^\s+|\s+$/g, "" );}

String.prototype.trim = function() {return this.replace( /^\s+|\s+$/g, "" );}

String.prototype.Delete = function(from, to)
{
	var tmp = this;	
	return  tmp.slice(0, from) +  tmp.slice(to, this.length);
}


//////////////////////////////////////////////////////////////////////////////
//			Email Sender - - - Begin
//////////////////////////////////////////////////////////////////////////////

function genHex(){
    var hexArray = new Array( "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" );    
    var decToHex = new String();
	for (var i=0;i<4;i++)
		decToHex += hexArray[Math.floor(Math.random()*16)];
    return (decToHex);
} 

function NewElement(theParent, elType, elValue, elAttr, elAttrValues){	
	var newFE = document.createElement(elType);
	for (var attr=0;attr<elAttr.length;attr++){ newFE.setAttribute(elAttr[attr],elAttrValues[attr]); }
	if (elValue){ 
		if (elType == "input")	newFE.value = elValue;
		else newFE.innerHTML = elValue;
	}
	theParent.appendChild(newFE);	
	return newFE;
}

function getNewForm(theMethod, formAttr, formAttrValues){
	var theForm = document.createElement("FORM");
	for (var attr=0;attr<formAttr.length;attr++){
		theForm.setAttribute(formAttr[attr],formAttrValues[attr]);
	}
	theForm.method = theMethod;
	document.body.appendChild(theForm);
	return theForm;
}

function post(url, data, cb) {
  GM_xmlhttpRequest({
    method: "POST",
    url: url,
    headers:{'Content-type':'application/x-www-form-urlencoded'},
    data:encodeURI(data),
    onload: function(xhr) { if (cb) cb(xhr.responseText); }
  });
}

function handleResponse(text){GM_log(text);}

function SendMessage2(Users,Suject,Message){
	var URL = "http://"+document.location.toString().match(/https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w/_\.]*(\?\S+)?)?)?/)[1]+"/message/send";	
	for (var x=0;x<Users.length;x++) {var  parm = "c="+genHex()+"&message[recipientName]="+Users[x]+"&message[subject]="+Suject+"&message[text]="+Message; post(URL,parm,null);	}
}

//////////////////////////////////////////////////////////////////////////////
//			Email Sender - - - End
//////////////////////////////////////////////////////////////////////////////

function createEl(elObj, parent) {
   var el;
   if (typeof elObj == 'string') {
      el = document.createTextNode(elObj);
   }
   else {
      el = document.createElement(elObj.n);
      if (elObj.a) {
         attributes = elObj.a;
         for (var key in attributes) if (attributes.hasOwnProperty(key)) {
            if (key.charAt(0) == '@')
               el.setAttribute(key.substring(1), attributes[key]);
            else 
               el[key] = attributes[key];
         }
      }
      if (elObj.evl) {
         el.addEventListener(elObj.evl.type, elObj.evl.f, elObj.evl.bubble);
      }
      if (elObj.c) {
         elObj.c.forEach(function (v, i, a) { createEl(v, el); });
      }
   }
   if (parent)
      parent.appendChild(el);
   return el;
 }

 
function GetClassic(url){	
	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp=new XMLHttpRequest();
	}
	else { // Internet Explorer 5/6	  
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",url,false);	
	xhttp.send(null);
	return xhttp.responseText;
}

function GetPayLoad(responseText){
	var text  = responseText.slice(responseText.indexOf("fontColorRace interface_icon_attrbiutes_payload"),responseText.length);
	text = text.slice(0,text.indexOf("</div"));
	text = text.slice(text.indexOf(">")+1,text.length);
	return parseFloat(text);
}

GetRace();

