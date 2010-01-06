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

function AddUtilsSerives(){
	try{
	
	var newDiv = NewElement(document.body,"div","Edit options",["id","style"],["setting-saml-main","position: fixed; background-color: rgba(64, 64, 64, 0.5); top:50%; left: 0px; width: 100px; line-height:24px; height:24px ; z-index: 40000; text-align: center; color: red; font-weight: bold; -moz-border-radius: 6px; cursor: pointer;"]);	
	newDiv.addEventListener ("click", 
		function (){
			var elemExists = document.getElementById("setting-saml-container");
			if (!elemExists){
				var w = NewElement(document.body,"div",null,["id","style"],["setting-saml-container","position: fixed; z-index: 30000; left:0px; top:0px; right:0px;bottom:0px;background: rgba(0,0,0,0.75);"]);
				NewElement(w,"a",null,["style"],["position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; cursor: pointer;"]).addEventListener("click", function (){DeleteElement(document.getElementById("setting-saml-container"));} ,false);
				var w_d = NewElement(w,"div",null,["style"],["position: absolute; left: 50%; top: 50%;"]);
				
				var w_divFereastra = NewElement(w_d,"div",null,["style"],["position: absolute; left: -300px; top: -250px; width: 745px;z-index:20000;"]);
				var w_divTop = NewElement(w_divFereastra,"div",	null,["class","style"],["interface_overlay_top","height:94px;font-family:verdana;font-size:10px;text-align:left;"]);
				NewElement(w_divTop,"h1","SAML : Settings",["class","style"],["floatLeft","color:#FFFFFF;font-size:14px;height:41px;line-height:45px;padding-left:30px;margin:0;"]);
				addStyleToPage("a.closeSAML:hover { background-position:0 center !important; } a.closeSAML:active { background-position:0 bottom !important; } ");
				NewElement(w_divTop,"a",null,["class","style"],["closeSAML floatRight interface_overlay_close","background-position:0 top;background-repeat:no-repeat;display:block;height:36px;margin-right:28px;margin-top:5px;width:40px;cursor:pointer;"]).addEventListener("click", function (){DeleteElement(document.getElementById("setting-saml-container"));} ,false);;
				NewElement(w_divTop,"div",null,["style"],["clear: both;"]);
				NewElement(w_divTop,"div",null,["class","style"],["interface_overlay_divider","background-repeat:no-repeat;font-size:2px;height:2px;line-height:2px;"]);
				var w_divTop_Meniu = NewElement(w_divTop,"ul",null,["class","style"],["tabs","float:left;margin-top:-2px;padding-left:5px;"]);
				NewElement(NewElement(w_divTop_Meniu,"li",null,[],[]),"a","Tab1",["class","style"],["left interface_overlay_tabs_first active bgLink","cursor:pointer;"]);				
				
				var w_divMiddle = NewElement(w_divFereastra,"div",null,["class","style"],["interface_overlay_tile","padding-bottom:20px;padding-left:22px;width:723px;"]);
				var w_divMiddle_Middle = NewElement(w_divMiddle,"div",null,["class","style"],["colorWhite","width:683px;"]);
				NewElement(w_divMiddle_Middle,"div",null,["class","style"],["interface_overlay_glass_top","height:26px;width:683px;"]);
				var w_divMiddle_Middle_Middle = NewElement(w_divMiddle_Middle,"div",null,["class","style"],["interface_overlay_glass_tile colorWhite","width:683px;"]);
				NewElement(w_divMiddle_Middle_Middle,"p","Text Aici",["class","style"],["colorGrey","font-size:12px;line-height:20px;margin:0 0 0 17px;padding:0;text-align:justify;width:638px;"]);
				NewElement(w_divMiddle_Middle,"div",null,["class","style"],["interface_overlay_glass_bottom","height:29px;width:683px;"]);
				
				NewElement(w_divFereastra,"div",null,["class","style"],["interface_overlay_bottom","height:28px;position:relative;"]);				
			}
		}, false);
		
	}
	catch(e){
		alert(e);
	}
}

//AddUtilsSerives();