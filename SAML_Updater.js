/*
	SumAML - Updater script
	
*/

//var global = this;


function CallUpdate(){
	alert('1');
	var version = metadata.setting('version');
	alert('2');
	alert(version);
}

function CheckForUpdate(){	
	try{		
		var ScriptId = 60769;
		GM_xmlhttpRequest ({
			method: "GET",
			url: "http://userscripts.org/scripts/show/" + ScriptId,
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
				var newVersion = userScripts.getElementById ("summary").getElementsByTagName("b")[1].nextSibling.textContent;
				
				//Get the name of the script
				var name = userScripts.getElementById ("details").childNodes[1].innerHTML;
				
				if (trim (newVersion) != trim (version)){
					alert('avemversiunenoua');
				}
			}
		});
	}
	catch(e){
		alert(e);
	}
}

function addUpdateString(){
	//<div align="center" class="floatLeft " style="width: 100%; height: 24px;">
	//	<a style="cursor: pointer;" class="colorLightGrey">test</a>
	//</div>	
	var headMainDiv = document.getElementById('head');
	headMainDiv.innerHTML += 
		"<div align=\"center\" class=\"floatLeft \" style=\"width: 100%; height: 24px;\">"+
			"<a style=\"cursor: pointer;\" class=\"colorLightGrey\">Update SAML to new version :1.0001</a>"+
		"</div>";
}

addUpdateString();