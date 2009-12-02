/*
*		SAML - Alliance 
*
*
*/

function showOnAlliance(){
	var isAlliance = document.location.toString().match(/\alliance\b/g);
	if (isAlliance)
	{
		var MembersDiv = document.getElementsByClassName('fleetTable members bgNoRepeat interface_fleet_table_background')[0];
		if (MembersDiv){
			membersTable=MembersDiv.getElementsByTagName("table");
			//add combo
			parent = membersTable.getElementsByTagName("thead").rows[0];
			parent.cells[0].setAttribute ("colspan", "4");
			var elementNou = parent.createElement("td");
			elementNou.setAttribute ("colspan", "2");
			elementNou.setAttribute ("class", "borderNone");
			var comboNou = elementNou.createElement("select");
			comboNou.setAttribute ("class", "formSelect");
			comboNou.setAttribute ("name", "selectMembers");
			comboNou.setAttribute ("id", "selectMembers");
			comboNou.innerHTML = "<option value=\"1\">All</option>"+
				"<option value=\"2\">Online</option>"+
				"<option value=\"3\">Idle</option>"+
				"<option value=\"4\">UnAvailable</option>"+
				"<option value=\"5\">Other</option>";				
			//elementNou.innerHTML = "";			
			comboNou.addEventListener ("onchange", changeSelect(comboNou.value), false);
		}
	}
}

function changeSelect(id){
	alert(id);
}

showOnAlliance();
