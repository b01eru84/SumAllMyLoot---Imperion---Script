/*
*		SAML - Recycle
*
*
*/

function myFunction(e){
	// var mapInfo = document.getElementById('mapInfo');
	// alert(mapInfo.className);
}

function showOnRecycle(){
	// var isMap = document.location.toString().match(/\map\b/g);	
	// if (isMap){		
		// var mapgalaxy = document.getElementById('mapGalaxy');
		// if (mapgalaxy){			
			// var planets = mapgalaxy.getElementsByTagName("img");			
			// for (var i=0;i<planets.length;i++){				
				// planets[i].addEventListener ("mouseover",myFunction,false);
			// }
		// }
		////el.addEventListener ("mouseover",myFunction,false);
	// }
}

function InitListener (div,attrName,onFire) {
	var ListenerForElemet = document.getElementById (div);
	ChargeFireEvent(ListenerForElemet,attrName);
	if (ListenerForElemet.addEventListener) {   // Firefox, Opera and Safari
		ListenerForElemet.addEventListener ('DOMAttrModified', onFire, false);  // Firefox, Opera
	}
}

function ChargeFireEvent (eventElement,attribute) {			
	var attr = eventElement.getAttributeNode (attribute);
	var eventObject = document.createEvent('MutationEvent');
	eventObject.initMutationEvent ("DOMAttrModified", true, true, attr, null, attr.value, attribute, MutationEvent.MODIFICATION);
	eventElement.dispatchEvent(eventObject);
}

function OnCometEnterComplete (event) {
	if (event.newValue.toString().match(/(block)/g) || !event.newValue.toString().match(/(none)/g)){
		var divCometInfo = document.getElementById("mapDialog_cometInfo");
		if (divCometInfo){
			var RowsWithData = divCometInfo.getElementsByTagName("tbody")[0];
			var Metal = document.getElementById("orbInfo_resourceCometMetal").innerHTML.match(/\d+/g).join("");
			var Crystal = document.getElementById("orbInfo_resourceCometCrystal").innerHTML.match(/\d+/g).join("");
			var DeuTri = document.getElementById("orbInfo_resourceCometDeuTri").innerHTML.match(/\d+/g).join("");
			var rowsLength = RowsWithData.rows.length;
			for (var i = 3;i<rowsLength;i++){				
				if (RowsWithData.rows[RowsWithData.rows.length-1]){
					RowsWithData.removeChild(RowsWithData.rows[RowsWithData.rows.length-1]);
				}
			}
			var trNou1 = document.createElement("tr");
			trNou1.setAttribute("class", "fontColorRace");
			RowsWithData.appendChild(trNou1);
			var tdNou1 = document.createElement("td");
			tdNou1.innerHTML = RecyclerName[race-1];
			trNou1.appendChild(tdNou1);
			var tdNou2 = document.createElement("td");
			tdNou2.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)+parseFloat(DeuTri)) / parseFloat(RecyclerPayLoad[race-1])).toString();
			trNou1.appendChild(tdNou2);
			if (race == 1) {
				var trNou2 = document.createElement("tr");
				trNou2.setAttribute("class", "fontColorRace");
				RowsWithData.appendChild(trNou2);
				var tdNou3 = document.createElement("td");
				tdNou3.innerHTML = RecyclerName[race-1+3];
				trNou2.appendChild(tdNou3);
				var tdNou4 = document.createElement("td");
				tdNou4.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)+parseFloat(DeuTri)) / parseFloat(RecyclerPayLoad[race-1+3])).toString();
				trNou2.appendChild(tdNou4);
			}
		}
	}          
}

function OnAsteroidEnterComplete(event) {
	if (event.newValue.toString().match(/(block)/g) || !event.newValue.toString().match(/(none)/g)){
		var divAsteroidInfo = document.getElementById("mapDialog_asteroidInfo");
		if (divAsteroidInfo){
			var RowsWithData = divAsteroidInfo.getElementsByTagName("tbody")[0];
			var Metal = document.getElementById("orbInfo_resourceAsteroidMetal").innerHTML.match(/\d+/g).join("");
			var Crystal = document.getElementById("orbInfo_resourceAsteroidCrystal").innerHTML.match(/\d+/g).join("");
			var DeuTri = document.getElementById("orbInfo_resourceAsteroidDeuTri").innerHTML.match(/\d+/g).join("");
			var rowsLength = RowsWithData.rows.length;
			for (var i = 3;i<rowsLength;i++){				
				if (RowsWithData.rows[RowsWithData.rows.length-1]){
					RowsWithData.removeChild(RowsWithData.rows[RowsWithData.rows.length-1]);
				}
			}
			var trNou1 = document.createElement("tr");
			trNou1.setAttribute("class", "fontColorRace");
			RowsWithData.appendChild(trNou1);
			var tdNou1 = document.createElement("td");
			tdNou1.innerHTML = RecyclerName[race-1];
			trNou1.appendChild(tdNou1);
			var tdNou2 = document.createElement("td");
			tdNou2.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)+parseFloat(DeuTri)) / parseFloat(RecyclerPayLoad[race-1])).toString();
			trNou1.appendChild(tdNou2);
			if (race == 1) {
				var trNou2 = document.createElement("tr");
				trNou2.setAttribute("class", "fontColorRace");	
				RowsWithData.appendChild(trNou2);			
				var tdNou3 = document.createElement("td");
				tdNou3.innerHTML = RecyclerName[race-1+3];
				trNou2.appendChild(tdNou3);
				var tdNou4 = document.createElement("td");
				tdNou4.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)+parseFloat(DeuTri)) / parseFloat(RecyclerPayLoad[race-1+3])).toString();
				trNou2.appendChild(tdNou4);
			}
		}
	}
}

function OnDebrisEnterComplete(event) {
	if (event.newValue.toString().match(/(block)/g) || !event.newValue.toString().match(/(none)/g)){
	var divDebrisInfo = document.getElementById("mapDialog_debrisInfo");
		if (divDebrisInfo){
			var RowsWithData = divDebrisInfo.getElementsByTagName("tbody")[0];
			var Metal = document.getElementById("orbInfo_resourceDebrisMetal").innerHTML.match(/\d+/g).join("");
			var Crystal = document.getElementById("orbInfo_resourceDebrisCrystal").innerHTML.match(/\d+/g).join("");
			var rowsLength = RowsWithData.rows.length;
			for (var i = 2;i<rowsLength;i++){				
				if (RowsWithData.rows[RowsWithData.rows.length-1]){
					RowsWithData.removeChild(RowsWithData.rows[RowsWithData.rows.length-1]);
				}
			}
			var trNou1 = document.createElement("tr");
			trNou1.setAttribute("class", "fontColorRace");
			RowsWithData.appendChild(trNou1);
			var tdNou1 = document.createElement("td");
			tdNou1.innerHTML = RecyclerName[race-1];
			trNou1.appendChild(tdNou1);
			var tdNou2 = document.createElement("td");
			tdNou2.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)) / parseFloat(RecyclerPayLoad[race-1])).toString();
			trNou1.appendChild(tdNou2);
			if (race == 1) {
				var trNou2 = document.createElement("tr");
				trNou2.setAttribute("class", "fontColorRace");
				RowsWithData.appendChild(trNou2);				
				var tdNou3 = document.createElement("td");
				tdNou3.innerHTML = RecyclerName[race-1+3];
				trNou2.appendChild(tdNou3);
				var tdNou4 = document.createElement("td");
				tdNou4.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)) / parseFloat(RecyclerPayLoad[race-1+3])).toString();
				trNou2.appendChild(tdNou4);
			}
		}
	}
}
		
function OnAttrModified (event) {
	alert ("The " + event.attrName + " property of the " + event.target.tagName 
				+ " element is changed to:\n" + event.newValue);
}

InitListener("mapDialog_cometInfo","style",OnCometEnterComplete);
InitListener("mapDialog_asteroidInfo","style",OnAsteroidEnterComplete);
InitListener("mapDialog_debrisInfo","style",OnDebrisEnterComplete);


//document.addEventListener ("click", showOnRecycle, false);
//showOnRecycle();