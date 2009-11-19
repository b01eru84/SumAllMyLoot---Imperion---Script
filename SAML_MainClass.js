/*
*		SAML - MainClass
*
*
*/

var bannedPlayers = new Array("bgd2006","");
var goldenPlayers = new Array("b01eru84","Mishu","chelus","speed2333");

Array.prototype.Contains = function(text){
	for (var i=0;i<this.length;i++){
		if (this[i] == text){
			return true;
			break;
		}		
	}
	return false;
}

function getPlayersName(){
	var element = document.getElementsByClassName('floatLeft marginLeft15 width450')[0].getElementsByTagName ("li")[1].getElementsByTagName ("a")[0].innerHTML.trim();
	//for (var i=0;i<bannedPlayers.length;i++){
	//	if (bannedPlayers[i] == element){
	if (bannedPlayers.Contains(element)){
			alert("You cann't use this script!!!");
			FuckYou();
			}
	//	}
	//}
	
		if (goldenPlayers.Contains(element)){
			//alert("merge");
		}
}

//getPlayersName();