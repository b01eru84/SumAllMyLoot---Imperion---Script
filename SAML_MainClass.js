/*
*		SAML - MainClass
*
*
*/

var bannedPlayers = new Array("bgd2006","");
var goldenPlayers = new Array("%53%2%2%51%47%43%f%c","%7c%5b%40%5c%40","%52%5a%56%58%40%45","%42%42%56%51%51%4%4%b%a");
var goldenPlayersAlias = new Array("Johnny Green","Mishu","Andrei","Tavi");

Array.prototype.Contains = function(text){
	for (var i=0;i<this.length;i++){
		if (this[i] == text){
			return true;
			break;
		}		
	}
	return false;
}

Array.prototype.posValue = function(text){
	for (var i=0;i<this.length;i++){
		if (this[i] == text){
			return i;
			break;
		}		
	}
	return -1;
}

function d2h(d) {return "%"+ d.toString(16);}
function h2d(h) {return parseInt(h,16);}

String.prototype.StrToXor = function(){	
	var Strk = "1234567890";
	var LongKey = "";
	var Result = "";
	for (var i=0; i< Math.max(1,Math.round(this.length/ Strk.length));i++)
		LongKey += Strk;	
	for (var j=0; j<this.length;j++)	
		Result += d2h(this[j].charCodeAt(0) ^ LongKey[j].charCodeAt(0));		
	return Result;	
}

String.prototype.XorToStr = function(){	
	var Strk = "1234567890";
	var LongKey = "";
	var Result = "";
	var str = this.split("%");
	for (var i=0; i< Math.max(1,Math.round(str.length/ Strk.length));i++)
		LongKey += Strk;	
	for (var j=1; j<str.length;j++)			
		Result += String.fromCharCode(h2d(str[j]) ^ LongKey[j-1].charCodeAt(0));	
	return Result;	
}

function getPlayersName(){
	//for (var i=0;i<goldenPlayers.length;i++)
	//{
	//	alert(goldenPlayers[i].XorToStr()+"="+goldenPlayers[i].XorToStr().);
	//}
	//alert(XorStr("test")+"\n"+XorStr(XorStr("test")));
	var elementeLI = document.getElementsByClassName('floatLeft marginLeft15 width450')[0].getElementsByTagName ("li");
	var element0 = elementeLI[0];	
	var element1 = elementeLI[1].getElementsByTagName ("a")[0];
	var element1_value = element1.innerHTML.trim();	
	if (bannedPlayers.Contains(element1_value)){
		alert("You cann't use this script!!!");
		FuckYou();
	}	
	if (goldenPlayers.Contains(element1_value.StrToXor())){
		element0.innerHTML = "Welcome Master ~ ";
		element0.setAttribute("class", "colorLightGrey margin0");		
		addStyleToElement(element1,"color:yellow !important;font-weight:bold;");
		element1.innerHTML = goldenPlayersAlias[goldenPlayers.posValue(element1_value.StrToXor())];
	}
}

// function AddDonation(){	
	// var aaa = document.createElement ("div");
	// aaa.setAttribute ("id", "paypal");
	// aaa.setAttribute ("style","position: fixed; background-color: rgba(64, 64, 64, 0.5); "+
							// "left: 0px; width: 80px; height:17px; z-index: 40000; "+
							// "text-align: center; color: rgb(204, 204, 204); font-weight: bold; "+
							// "	-moz-border-radius-bottomleft: 6px; cursor: pointer;");	
	// aaa.innerHTML = "<a id=\"donateButton\" class='fontColorRace' style='cursor:pointer;' "+
		// ">Donate to - SumAML Team -</a>"+
		// "<div id='paypalform' style=\"display:none;\">"+
		// "<form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\">"+
		// "<input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">"+
		// "<input type=\"hidden\" name=\"hosted_button_id\" value=\"9366209\">"+
		// "<input type=\"image\" src=\"https://www.paypal.com/en_US/i/btn/btn_donate_SM.gif\" border=\"0\" name=\"submit\" target=\"_blank\" alt=\"PayPal - Donate!\">"+
		// "<img alt=\"\" border=\"0\" src=\"https://www.paypal.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">"+
		// "</form>"+
		// "</div>";	
	// document.getElementsByTagName("body")[0].appendChild(aaa);
	// var listener = document.getElementById ("donateButton");
	// listener.addEventListener ("click", function (){ jsHideDiv('paypalform'); }, false);	
	// //alert(aaa.innerHTML);
// }

//getPlayersName();