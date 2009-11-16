/*
*		SAML - Fleetbase 
*
*
*/


function showOnFleetBase(){
	var isFleetBase = document.location.toString().match(/\bfleetBase\b/g) || 
		document.location.toString().substr(document.location.toString().length - 3, 3)=="610" ||    
		document.location.toString().match(/\brecall\b/g);
	if (isFleetBase)
	{		
		var getSumElements = document.getElementsByClassName('resourceCost');
		var Metal = 0;
		var Cristal = 0;
		var DeuteriuTritiu = 0;
		for (var i=0;i<getSumElements.length;i++ )
		{
			var tmpM = getSumElements[i].getElementsByClassName('interface_icon_metal')[0].textContent.match(/\d+/g);
			tmpM = tmpM.join("");
			Metal += parseInt(tmpM);	
			var tmpC = getSumElements[i].getElementsByClassName('interface_icon_crystal')[0].textContent.match(/\d+/g);
			tmpC = tmpC.join("");
			Cristal += parseInt(tmpC);	
			var tmpD = getSumElements[i].getElementsByClassName('interface_icon_deuterium')[0].textContent.match(/\d+/g);	
			tmpD = tmpD.join("");	
			DeuteriuTritiu += parseInt(tmpD);	
		}

		try {
			var planetResTable = document.getElementsByClassName('resourceInfoTable')[0];
			var tmpMetal = planetResTable.rows[2].cells[0].innerHTML.match(/\d+/g);
			tmpMetal = tmpMetal.join("");
			var maxMetal = parseInt(tmpMetal);
			var tmpCristal = planetResTable.rows[2].cells[2].innerHTML.match(/\d+/g);
			tmpCristal= tmpCristal.join("");
			var maxCristal = parseInt(tmpCristal);
			var tmpDeuTrit = planetResTable.rows[2].cells[4].innerHTML.match(/\d+/g);
			tmpDeuTrit = tmpDeuTrit.join("");
			var maxDeuteriuTritiu = parseInt(tmpDeuTrit);

			var resourceMetal = parseInt(document.getElementById('storageR1').innerHTML.match(/\d+/g).join(""));
			var resourceCristal = parseInt(document.getElementById('storageR2').innerHTML.match(/\d+/g).join(""));
			var resourceTritiu = parseInt(document.getElementById('storageR3').innerHTML.match(/\d+/g).join(""));
		}
		catch (e){
			window.status = e;
		}
		var resClassMetal = "bgNoRepeat interface_icon_metal fontColorRace";
		var resClassCristal = "bgNoRepeat interface_icon_crystal fontColorRace";
		var resClassDeuTritiu = "bgNoRepeat interface_icon_deuterium fontColorRace";
		var overMetal = 0;
		var overCristal = 0;
		var overTritiu = 0;

		if ((Metal + resourceMetal) > maxMetal)
		{
		   resClassMetal = "bgNoRepeat interface_icon_metal colorRed";
		   overMetal = (Metal + resourceMetal) - maxMetal;
		}
		if ((Cristal + resourceCristal) > maxCristal)
		{
		   resClassCristal = "bgNoRepeat interface_icon_crystal colorRed";
		   overCristal = (Cristal + resourceCristal) - maxCristal;
		}
		if ((DeuteriuTritiu + resourceTritiu) > maxDeuteriuTritiu)
		{
		   resClassDeuTritiu = "bgNoRepeat interface_icon_deuterium colorRed";
		   overTritiu = (DeuteriuTritiu + resourceTritiu) - maxDeuteriuTritiu;
		}
		var overMetalString = "";
		if (overMetal > 0)
		   overMetalString = "<div class='fontSize10 colorRed'>(" + addCommas(overMetal) + ")</div>";
		else
			overMetalString = "";
		var overCristalString = "";
		if (overCristal > 0)
		   overCristalString = "<div class='fontSize10 colorRed'>(" + addCommas(overCristal) + ")</div>";
		else
			overCristalString = "";
		var overTritiuString = "";
		if (overTritiu > 0)
		   overTritiuString = "<div class='fontSize10 colorRed'>(" + addCommas(overTritiu) + ")</div>";
		else
			overTritiuString = "";
		var fleetPos = "";
		switch (race)
		   {
			 case 1:
				  fleetPos = 10;
				  break;
			 case 2:
				  fleetPos = 10;
				  break;
			 case 3:
				  fleetPos = 6;
				  break;
		   }
	   
		var LocationForMyDiv= document.getElementsByClassName('interface_content_building_content_top')[0];
		LocationForMyDiv.style.position = "relative";
		var ResourcesTable =
			"<div class='colorWhite tile interface_content_building_info_background' style='float:right;position:absolute;top:0;right:0;margin-right: 15px; margin-top: 5px'>"+
				"<table class='fontSize12 colorWhite fontBold tile interface_content_building_info_background' align='center' style='border-spacing:0;' border='0'>"+
					"<colgroup>"+
						"<col style='width: 100px;'>"+
					"</colgroup>"+
					"<tbody>"+
						"<tr class='fleet fontCenter colorGrey'>"+
							"<td class='fontBold fleet fontLeft colorGrey'>&nbsp;&nbsp;&nbsp;Total:</td> "+
							"<td class='fontBold fleet fontCenter colorGrey' colspan='6'>"+
							"<img class='ingameHelp fleet3 fleetPos"+fleetPos+" interface_ships_all"+race+"' src='/img/x.gif' />" +
							"</td>"+
						"</tr>"+
						"<tr class='colorGrey resourceCost bgNoRepeat interface_content_building_info_tile'>"+
							"<ul class='resourceCost'>"+
									"<li class='"+resClassMetal+"'>"+addCommas(Metal)+"</li>"+
							"</ul>"+
							"<td class='fontBold fleet fontCenter colorGrey'>"+overMetalString+"</td> "+
						"</tr>"+
						"<tr class='colorGrey resourceCost bgNoRepeat interface_content_building_info_tile'>"+
							"<ul class='resourceCost'>"+
									"<li class='"+resClassCristal+"'>"+addCommas(Cristal)+"</li>"+
							"</ul>"+
											"<td class='fontBold fleet fontCenter colorGrey'>"+overCristalString+"</td> "+
						"</tr>"+
						"<tr class='colorGrey resourceCost bgNoRepeat interface_content_building_info_tile'>"+
							"<ul class='resourceCost'>"+
									"<li class='"+resClassDeuTritiu+"'>"+addCommas(DeuteriuTritiu)+"</li>"+
							"</ul>"+
						"<td class='fontBold fleet fontCenter colorGrey'>"+overTritiuString+"</td> "+
						"</tr>"+
					"</tbody>"+
				"</table>"+
			"</div>";
		LocationForMyDiv.innerHTML += ResourcesTable;
	   
	   
	   
	}
}

showOnFleetBase();