/*
*		SAML - Util functions
*
*
*/

var race = "0";

var RecyclerPayLoad = new Array(500,1000,800,20000);
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

//<form method="post" id="messageForm" action="/message/send" name="message" style="display:none;">
//<input type="hidden" value="c3aa" name="c" id="c"/>
//<input type="hidden" value="" name="message[recipientName]" id="message_recipientName"/>
//<input type="hidden" value="" name="message[subject]" id="message_subject"/>
//<textarea style="display:none;" name="message[text]" id="message_text"></textarea>
//</form>

function getNewSubmitForm(){
 var submitForm = document.createElement("FORM");
 document.body.appendChild(submitForm);
 submitForm.method = "POST";
 return submitForm;
}

//helper function to add elements to the form
function createNewFormElement(inputForm, elementName, elementValue){
 var newElement = document.createElement("<input name='"+elementName+"' type='hidden'>");
 inputForm.appendChild(newElement);
 newElement.value = elementValue;
 return newElement;
}

//function that creates the form, adds some elements
//and then submits it
function createFormAndSubmit(){
 var submitForm = getNewSubmitForm();
 createNewFormElement(submitForm, "field1", "somevalue");
 createNewFormElement(submitForm, "field2", "somevalue");
 submitForm.action= "someURL";
 submitForm.submit();
}

String.prototype.trim = function() {
		return this.replace( /^\s+|\s+$/g, "" );
}

GetRace();

