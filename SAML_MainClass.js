/*
*		SAML - MainClass
*
*
*/

var bannedPlayers = new Array("bgd2006","");
var goldenPlayers = new Array("b01eru84","");

function getPlayersName(){
	var element = document.getElementsByClassName('floatLeft marginLeft15 width450')[0].getElementsByTagName ("li")[1].getElementsByTagName ("a")[0].innerHTML.trim();
	for (var i=0;i<bannedPlayers.length;i++){
		if (bannedPlayers[i] == element)
			alert("You cann't use this script!!!");
	}
//	if (element)
		//alert(element);
	
}

getPlayersName();