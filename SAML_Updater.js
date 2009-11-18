/*
*		SAML - Updater 
*
*
*/

/*
*		SAML - Updater 
*
*
*/

function addUpdateMessage(){	
	var headMainDiv = document.getElementById('head');	
	if (headMainDiv){	
		headMainDiv.innerHTML +=
			"<div id='UpdateScript_div' align='center' class='floatLeft' style='width: 100%; height: 24px;'>"+
				"<a id='UpdateScript_check' style='cursor: pointer; font-weight:bold;' class='colorLightGrey'>Check for a new version to SAML script</a>"+
			"</div>";
	}
	var listener = document.getElementById ("UpdateScript_check");
	listener.addEventListener ("click", ScriptCheck, false);	
}

// function installScript (){
	// var days = parseInt (document.getElementById ("autoUpdater_input").value);
	// var ms = new Date ().getTime ();
	
	// if (ok){
		// if (days == 0){
			// GM_setValue ("update", "#0");
			
			// menuCommand ();
			// showMessage ();
		// }else{
			// GM_setValue ("update", (days*24*60*60*1000 + ms).toString () + "#" + days);
		// }
		
		// window.open ("http://userscripts.org/scripts/source/" + id + ".user.js", "_self");
		// eliminaElem (document.getElementById ("autoUpdater_divVersion"));
	// }
// }

function ScriptCheck(){
	var version = metadata.setting('version').trim();
	GM_xmlhttpRequest ({
		method: "GET",
		url: "http://userscripts.org/scripts/show/60769",
		headers: {
					"User-agent": "Mozilla/5.0",
					"Accept": "text/html",
				 },
		onload: function (respuesta){
			//alert("intra");
			var userScripts = document.implementation.createDocument ("", "", null);
			var html = document.createElement ("html");
			html.innerHTML = respuesta.responseText;
			userScripts.appendChild (html);
			
			//Get new version
			var newVersion = userScripts.getElementById ("summary").getElementsByTagName ("b")[1].nextSibling.textContent.trim();
			//alert(newVersion);
			//Get the name of the script
			var name = userScripts.getElementById ("details").childNodes[1].innerHTML;
			//alert(name);
			alert(newVersion+"|"+version);
			if (newVersion != version){
				var installDiv = document.getElementById('UpdateScript_div');	
				if (installDiv){	
					installDiv.innerHTML = 
						"<a id='UpdateScript_text' style='font-weight:bolder;' class='colorLightGrey'>SAML has a new version ("+newVersion+") ?</a>"+
						"<a id='UpdateScript_install' style='cursor: pointer; font-weight:bolder;margin-left:8px;' class='colorLightGrey'>[Install]</a>"+
						"<a style='margin-left:8px;' class='colorLightGrey'>|</a>"+
						"<a id='UpdateScript_cancel' style='cursor: pointer; font-weight:bolder;margin-left:8px;' class='colorLightGrey'>[Cancel]</a>";						
				}
			}
			
		}
	});
}



//addUpdateMessage();