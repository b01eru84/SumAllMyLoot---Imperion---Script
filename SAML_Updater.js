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
		var listener = document.getElementById ("UpdateScript_check");
		listener.addEventListener ("click", ScriptCheck, false);
	}	
}

function ScriptCheck(){
	addStyleToPage(	".nounderline:hover {text-decoration:none !important;color:#8E9498 !important;}"+
					".colorStyleRed { color:#E70A0A !important; }");
	var version = metadata.setting('version').trim();
	GM_xmlhttpRequest ({
		method: "GET",
		url: "http://userscripts.org/scripts/show/60769",
		headers: {
					"User-agent": "Mozilla/5.0",
					"Accept": "text/html",
				 },
		onload: function (respuesta){
			var userScripts = document.implementation.createDocument ("", "", null);
			var html = document.createElement ("html");
			html.innerHTML = respuesta.responseText;
			userScripts.appendChild (html);			
			//Get new version
			var newVersion = userScripts.getElementById ("summary").getElementsByTagName ("b")[1].nextSibling.textContent.trim();
			//Get the name of the script
			var name = userScripts.getElementById ("details").childNodes[1].innerHTML;
			//alert(newVersion+"|"+version);
			if (newVersion != version){
				var installDiv = document.getElementById('UpdateScript_div');	
				if (installDiv){	
					installDiv.innerHTML = 
						"<a id='UpdateScript_text' style='font-weight:bolder' class='colorLightGrey nounderline'>SAML has a new version ( "+name+" : "+newVersion+" ) ?</a>"+
						"<a id='UpdateScript_install' style='cursor: pointer; font-weight:bolder;margin-left:8px;' class='colorLightGrey colorStyleRed'>[Install]</a>"+
						"<a style='margin-left:8px;' class='colorLightGrey nounderline'>|</a>"+
						"<a id='UpdateScript_cancel' style='cursor: pointer; font-weight:bolder;margin-left:8px;' class='colorLightGrey'>[Cancel]</a>";						
				}
				var listener1 = document.getElementById ("UpdateScript_install");
				listener1.addEventListener ("click", ScriptInstall, false);
				var listener2 = document.getElementById ("UpdateScript_cancel");
				listener2.addEventListener ("click", ScriptCancel, false);
			}
			else{
				var checkDiv = document.getElementById('UpdateScript_check');	
				if (checkDiv)	
					checkDiv.innerHTML = "Check for a new version to SAML script - No new version...";				
			}
		}
	});
}

function ScriptCancel(){
	var installDiv = document.getElementById('UpdateScript_div');	
	if (installDiv){	
		installDiv.innerHTML = 
			"<div id='UpdateScript_div' align='center' class='floatLeft' style='width: 100%; height: 24px;'>"+
				"<a id='UpdateScript_check' style='cursor: pointer; font-weight:bold;' class='colorLightGrey'>Check for a new version to SAML script</a>"+
			"</div>";
		var listener = document.getElementById ("UpdateScript_check");
		listener.addEventListener ("click", ScriptCheck, false);			
	}
}

function ScriptInstall(){
	window.open ("http://userscripts.org/scripts/source/60769.user.js", "_self");
	ScriptCancel();
}


addUpdateMessage();