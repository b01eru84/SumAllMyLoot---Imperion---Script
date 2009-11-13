/*
*		SAML - Updater 
*
*
*/

function addUpdateMessage(){	
	var headMainDiv = document.getElementById('head');
	//alert(headMainDiv);
	if (headMainDiv){	
		headMainDiv.innerHTML +=
			"<div align='center' class='floatLeft ' style='width: 100%; height: 24px;'>"+
				"<a style='cursor: pointer;' class='colorLightGrey'>Update SAML to new version :1.0001</a>"+
			"</div>";
	}
}



//addUpdateMessage();