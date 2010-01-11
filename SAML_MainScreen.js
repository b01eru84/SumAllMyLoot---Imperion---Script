/*
*		SAML - MainScreen
*
*
*/

function ShowResources()
{	
	var resourcesBar = document.getElementById('resourceBar');
	var dialog = document.getElementById('dialog');
	var resourcesTable = dialog.getElementByClassName('resourceInfoTable')[0];
	
	var metalDiv = resourcesTable.rows[0].cells[0];
	var metal = metalDiv.getElementByClassName('fontColorRace fontSize16 fontBold')[0].innerHTML;
	alert(metal);
	
}

ShowResources();