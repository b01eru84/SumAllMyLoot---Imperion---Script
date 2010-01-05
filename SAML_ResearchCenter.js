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
			var matchNumber = currPointsDiv.innerHTML.match(/\d+/g).length;
			var match = currPointsDiv.innerHTML.match(/\d+/g).join(",");
			
			for (var j = 2; j < matchNumber; j++)
			{
				var idx = match.indexOf(",");
				match = match.Delete(idx, idx+1);				
			}			
			currPoints[i] = match;
						
			
			
			//production / day

			
			/*var points = researchTables[i].rows[2].cells[0].innerHTML.match(/\d+/g).join(",");
			productionPoints[i] = parseFloat(points);*/
			
			var matchNumberPoints = researchTables[i].rows[2].cells[0].innerHTML.match(/\d+/g).length;
			var matchPoints = researchTables[i].rows[2].cells[0].innerHTML.match(/\d+/g).join(",");
			
			for (var j = 2; j < matchNumberPoints; j++)
			{
				var idx = matchPoints.indexOf(",");
				matchPoints = matchPoints.Delete(idx, idx+1);				
			}						
			productionPoints[i] = matchPoints;
			
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