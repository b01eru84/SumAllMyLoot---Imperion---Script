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
			membersTable=MembersDiv.getElementsByTagName("table")[0];			
			//add combo
			parent = membersTable.getElementsByTagName("thead")[0].rows[0];
			parent.cells[0].setAttribute ("colspan", "4");		
			var elementNou = document.createElement("td");
			elementNou.setAttribute ("colspan", "2");
			elementNou.setAttribute ("class", "borderNone");
			elementNou.setAttribute ("style","padding:0 !important");
			parent.appendChild(elementNou);
			var comboNou = document.createElement("select");
			//comboNou.setAttribute ("class", "formSelect interface_forms_select");
			comboNou.style.width = "100%";			
			comboNou.setAttribute ("name", "selectMembers");
			comboNou.setAttribute ("id", "selectMembers");
			comboNou.innerHTML = "<option value=\"1\">All</option>"+
				"<option value=\"2\">Online</option>"+
				"<option value=\"3\">Idle</option>"+
				"<option value=\"4\">UnAvailable</option>"+
				"<option value=\"5\">Offline</option>"+
				"<option value=\"6\">Pending</option>";						
			elementNou.appendChild(comboNou);
			comboNou.addEventListener ("change", changeSelect, false);
		}
	}
}

function changeSelect(){
	var MembersDiv = document.getElementsByClassName('fleetTable members bgNoRepeat interface_fleet_table_background')[0];
	if (MembersDiv){
		membersTable=MembersDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
		for (var i=1;i < membersTable.rows.length;i+=2){			
			 switch(this.value){
				default: {
					 membersTable.rows[i].style.display="";
					 membersTable.rows[i-1].style.display="";
				}
				 break;
				case '2': {
					
					if (membersTable.rows[i].getElementsByClassName("statusAvailable").length != 0){
						
						membersTable.rows[i].style.display="";
						membersTable.rows[i-1].style.display="";
					}
					else{
						membersTable.rows[i].style.display="none";
						membersTable.rows[i-1].style.display="none";
					}
				}
				break;
				case '3': {
					if (membersTable.rows[i].getElementsByClassName("statusIdle").length != 0){
						membersTable.rows[i].style.display="";
						membersTable.rows[i-1].style.display="";
					}
					else{
						membersTable.rows[i].style.display="none";
						membersTable.rows[i-1].style.display="none";
					}
				}
				break;
				case '4': {
					if (membersTable.rows[i].getElementsByClassName("statusUnAvailable").length != 0){
						membersTable.rows[i].style.display="";
						membersTable.rows[i-1].style.display="";
					}
					else{
						membersTable.rows[i].style.display="none";
						membersTable.rows[i-1].style.display="none";
					}
				}
				break;	
				case '5': {
					if (membersTable.rows[i].getElementsByClassName("statusOffline").length != 0){
						membersTable.rows[i].style.display="";
						membersTable.rows[i-1].style.display="";
					}
					else{
						membersTable.rows[i].style.display="none";
						membersTable.rows[i-1].style.display="none";
					}
				}
				break;
				case '6': {
					if (membersTable.rows[i].getElementsByClassName("statusPending").length != 0){
						membersTable.rows[i].style.display="";
						membersTable.rows[i-1].style.display="";
					}
					else{
						membersTable.rows[i].style.display="none";
						membersTable.rows[i-1].style.display="none";
					}
				}
				break;				
			}
		}
		
	}
}

showOnAlliance();
