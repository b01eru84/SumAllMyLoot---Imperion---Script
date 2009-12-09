/*
*		SAML - Alliance 
*
*
*/

function showOnAlliance(){
	var isAlliance = document.location.toString().match(/\alliance\b/g);
	if (isAlliance)
	{
		var content_buildingDIV = document.getElementsByClassName('interface_content_building_content_center')[0].getElementsByTagName("div")[0];		 
		if (content_buildingDIV){		
			var divs = content_buildingDIV.getElementsByTagName("div");			
			var newDIVform_Mailer = document.createElement("div");			
			newDIVform_Mailer.setAttribute ("class", "fleetTable members bgNoRepeat interface_fleet_table_background");
			//newDIVform_Mailer.setAttribute ("style", "display:none;");
			//newDIVform_Mailer.setAttribute ("id", "form_Mailer");
			content_buildingDIV.insertBefore(newDIVform_Mailer,divs[2]);
						
			NewElement(newDIVform_Mailer,"div",null,["id","class","style"],["pnl_Messages","fontSize12 fontColorRace colorWhite fontBold bgNoRepeat interface_fleet_table_background","display:block;line-height:35px;text-align:center;"]);			
			
			var s2Div = NewElement(newDIVform_Mailer,"div",null,["id","style","class"],["form_Mailer","display:none; padding-bottom: 0px;padding-left:0;padding-right:0;","content fontSize12"]);			
			NewElement(s2Div,"div",null,["style","class"],["clear: left;","spacer10"]);
			NewElement(s2Div,"label","Subject:",["class"],["formMessageLabel floatLeft"]);			
			
			var divINP1 = NewElement(s2Div,"a",null,["style","class"],["width:550px;","formMessageInput floatLeft interface_forms_message_input_right"]);
			NewElement(divINP1,"input",null,["type","class","name","id"],["text","interface_forms_message_input_left","message[subject]","message_subject"]);				
			NewElement(s2Div,"div",null,["style","class"],["clear: left;","spacer10"]);
			NewElement(s2Div,"label","Message:",["class"],["formMessageLabel floatLeft"]);
			
			var divINP2 = NewElement(s2Div,"div",null,["style","class","id"],["width:557px;","messageTextArea floatLeft interface_forms_message_textarea_right","message_text_container"]);
			var divINP2_2 = NewElement(divINP2,"div",null,["style","class"],["width:550px;","interface_forms_message_textarea_left"]);			
			NewElement(divINP2_2,"textarea",null,["name","id","style"],["message[text]","message_text","width:550px;"]);				
			
			NewElement(s2Div,"div",null,["style","class"],["clear: left;","spacer10"]);
			var sendButton = NewElement(s2Div,"a","<span class=\"interface_forms_buttons_standart\"></span>Send",["id","class","style"],["sendMessage","buttonStd marginRight15 floatRight interface_forms_buttons_standart","cursor:pointer;"]);
			sendButton.addEventListener ("click", sendMessages, false);
			var cancelButton = NewElement(s2Div,"a","<span class=\"interface_forms_buttons_standart\"></span>Cancel",["id","class","style"],["cancelMessage","buttonStd marginRight15 floatRight interface_forms_buttons_standart","cursor:pointer;"]);
			cancelButton.addEventListener ("click", ClearForm, false);
									
			var newDIVSpacer = document.createElement("div");
			newDIVSpacer.setAttribute ("class", "spacer20");
			newDIVSpacer.setAttribute ("style", "clear: both;");
			content_buildingDIV.insertBefore(newDIVSpacer,divs[2]);
		}
		var MembersDiv = document.getElementsByClassName('fleetTable members bgNoRepeat interface_fleet_table_background')[1];
		if (MembersDiv){
			membersTable=MembersDiv.getElementsByTagName("table")[0];
			cols = membersTable.getElementsByTagName("colgroup")[0].getElementsByTagName("col");
			var newCol = document.createElement("col");
			newCol.setAttribute ("style", "width: 40px;");		
			membersTable.getElementsByTagName("colgroup")[0].insertBefore(newCol,cols[1]);
			titles = membersTable.getElementsByTagName("thead")[0].rows[2];			
			var aTitle = document.createElement("td");
			aTitle.setAttribute("class","borderNone");
			titles.insertBefore(aTitle,titles.cells[0]);
			//add combo
			parent = membersTable.getElementsByTagName("thead")[0].rows[0];			
			parent.cells[0].setAttribute ("colspan", "3");
			var tdbtnMail = document.createElement("td");
			tdbtnMail.setAttribute ("colspan", "2");
			tdbtnMail.setAttribute ("class", "borderNone");
			tdbtnMail.setAttribute ("style","padding:0 !important");
			tdbtnMail.innerHTML= 	
				"<a class=\"buttonStd marginRight15 floatRight interface_forms_buttons_standart\" style=\"cursor:pointer;\" id=\"sendMessageToCheckedUsers\">"+
					"<span class=\"interface_forms_buttons_standart\"></span>Send Messages"+
				"</a>";			
			parent.appendChild(tdbtnMail);
			var listenerSMTCU = document.getElementById("sendMessageToCheckedUsers");
			//alert(listenerSMTCU);
			listenerSMTCU.addEventListener ("click", ClearForm, false);
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
			elements = membersTable.getElementsByTagName("tbody")[0];
			//alert(elements);
			for (var i=1;i<elements.rows.length;i +=2){
				var newCheckBox = document.createElement("input");
				newCheckBox.setAttribute("type","checkbox");
				newCheckBox.setAttribute("name","checkbox")
				var elementNou = document.createElement("td");
				elementNou.appendChild(newCheckBox);				
				elements.rows[i].insertBefore(elementNou,elements.rows[i].cells[1]);				
			}
		}
	}
}

function sendMessages(){
	var newUsers = new Array();
	var tableMembers = document.getElementsByClassName('fleetTable members bgNoRepeat interface_fleet_table_background')[1].getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];	
	if (tableMembers){
		for (var i=1;i<tableMembers.rows.length;i +=2){
			var checkBox = tableMembers.rows[i].cells[1].getElementsByTagName("input")[0];		
			if (checkBox.checked == 1){				
				var nume = tableMembers.rows[i].cells[2].getElementsByTagName("a")[0].innerHTML;
				if (nume && nume != ""){
					newUsers.push(nume);
				}
			}
		}
	}
	var subject = document.getElementById("message_subject").value;
	var message = document.getElementById("message_text").value;
	if (newUsers.length > 0){
		SendMessage2(newUsers,subject,message);
	}
	var pnlMSG = document.getElementById("pnl_Messages");
	if (pnlMSG) pnlMSG.innerHTML = "Messages sent to : "+newUsers.join(", ");
	ClearForm();
}

function ClearForm(){
	jsHideDiv("form_Mailer");
	jsHideDiv("pnl_Messages");
	document.getElementById("message_subject").innerHTML = "";
	document.getElementById("message_text").innerHTML = "";

	// var checkBoxs = document.getElementsByTagName("input");
	// if (checkBoxs)
		// for (var i=0;i<checkBoxs.length;i++)	
			// if (checkBoxs[i].checked == 1){ checkBoxs[i].checked=0; }
}

function changeSelect(){
	var MembersDiv = document.getElementsByClassName('fleetTable members bgNoRepeat interface_fleet_table_background')[1];
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
