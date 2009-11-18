/*
*		SAML - Util functions
*
*
*/

var race = "0";

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
	var HeadElement;
	HeadElement = document.getElementsByTagName('head')[0];
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
	if (Elem){
		Elem.setAttribute('style',cssText);
	}
	else
	{
		elementId.setAttribute('style',cssText);
	}
}

function jsHideDiv(DivName){	
	var aDiv = document.getElementById(DivName);	
	if (aDiv.style.display == 'block') 
		{
			aDiv.style.display = 'none';
		}
	else
		{
			aDiv.style.display = 'block';
		}	
	}

function AddDonation(){	
	var aaa = document.createElement ("div");
	aaa.setAttribute ("id", "paypal");
	aaa.setAttribute ("style","position: fixed; background-color: rgba(64, 64, 64, 0.5); "+
							"left: 0px; width: 80px; height:17px; z-index: 40000; "+
							"text-align: center; color: rgb(204, 204, 204); font-weight: bold; "+
							"	-moz-border-radius-bottomleft: 6px; cursor: pointer;");	
	aaa.innerHTML = "<a id=\"donateButton\" class='fontColorRace' style='cursor:pointer;' "+
		">Donate to - SumAML Team -</a>"+
		"<div id='paypalform' style=\"display:none;\">"+
		"<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">"+
		"<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">"+
		"<input type=\"hidden\" name=\"hosted_button_id\" value=\"9366209\">"+
		"<input type=\"image\" src=\"https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif\" border=\"0\" name=\"submit\" target=\"_blank\" alt=\"PayPal - Donate!\">"+
		"<img alt=\"\" border=\"0\" src=\"https://www.paypal.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">"+
		"</form>"+
		"</div>";	
	document.getElementsByTagName("body")[0].appendChild(aaa);
	var listener = document.getElementById ("donateButton");
	listener.addEventListener ("click", function (){ jsHideDiv('paypalform'); }, false);	
	//alert(aaa.innerHTML);
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
        
        if (n.length < 2) 
        { 
            n = "0" + n;
        } 
        return n.toString(); 
} 

function showDays(days) {
	var fullHours = Math.round(24 * days);
	var hours = fullHours % 24;
	days = Math.floor(fullHours / 24);
	var minutes = hours % 60;	
	var a = [];
	if (days) {
		a.push(days);
	}
	/*if (hours) {
		a.push(PadDigits(hours));
	}*/

	if (!a.length) {
		a.push(PadDigits(hours) + " h");
		a.push(PadDigits(minutes) + " m");
		return a.join(":");
	}
	return a.join(":") + " day(s)";
}

//String.prototype.trim = function( text ) {
		//return (text || "").replace( /^\s+|\s+$/g, "" );
//}

String.prototype.trim = function() {
		return this.replace( /^\s+|\s+$/g, "" );
}

GetRace();

