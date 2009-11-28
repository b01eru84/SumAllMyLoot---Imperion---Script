/*
*		SAML - Research center
*
*
*/


function showOnResearchCenter(){
	var isResearchCenter = document.location.toString().match(/\bresearchCenter\b/g);
	if (isResearchCenter)
	{
		//research center
		var researchCenterMainDiv = document.getElementById('researchCenter');
		var researchTables = researchCenterMainDiv.getElementsByClassName('toggleTable');
		var currPoints = new Array();
		var productionPoints = new Array();
		
		for(var i = 1; i < researchTables.length; i++)
		{
			//total points
			var currPointsDiv = researchTables[i].rows[0].cells[2].getElementsByClassName('researchPoints fontSize18 colorWhite fontBold fontColorRace bgNoRepeat 	interface_fleet_table_background')[0];
			currPoints[i] = parseFloat(currPointsDiv.innerHTML.match(/\d+/g).join("."));
			//production / day
			var points = researchTables[i].rows[2].cells[0].innerHTML.match(/\d+/g).join(".");
			productionPoints[i] = parseFloat(points);
			
			var extraTableDiv = researchCenterMainDiv.getElementsByClassName('extraTable')[i-1];
			var categorieDiv = extraTableDiv.getElementsByClassName('fleetTable bgNoRepeat interface_fleet_table_background ')[0];		
			var researchTable = categorieDiv.getElementsByClassName('colorWhite')[0];
			for (var y = 2; y < researchTable.rows.length; y+=2)
			{	
				try
				{
					var requiredPoints = researchTable.rows[y].cells[2].innerHTML.match(/\d+/g).join("");
					var theButton = researchTable.rows[y].cells[3];															
					var button = theButton.getElementsByClassName('buttonError colorError interface_element_button_error')[0];	
					var daysvalue = ((parseFloat(requiredPoints) - parseFloat(currPoints[i])) / parseFloat(productionPoints[i])).toFixed(2);
					var days = showDays(daysvalue);
					button.innerHTML = "<span class='interface_element_button_error'></span><div class='ColorGray'>Ready in " + days+"</div>";
				}
				catch (e)
				{
					window.status = e;
				}						
			}
		}
	}
}


showOnResearchCenter();