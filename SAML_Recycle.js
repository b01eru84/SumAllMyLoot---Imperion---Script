/*
*		SAML - Recycle
*
*
*/

function showOnRecycle(){
try{
	var isComet = document.location.toString().match(/\comet\b/g);
	if (isComet){
		var divCometInfo = document.getElementById("mapDialog_cometInfo");
		if (divCometInfo){
			var RowsWithData = divCometInfo.getElementsByTagName("tbody")[0];
			var Metal = document.getElementById("orbInfo_resourceCometMetal").innerHTML.match(/\d+/g).join("");
			var Crystal = document.getElementById("orbInfo_resourceCometCrystal").innerHTML.match(/\d+/g).join("");
			var DeuTri = document.getElementById("orbInfo_resourceCometDeuTri").innerHTML.match(/\d+/g).join("");
								
			var trNou1 = document.createElement("tr");
			RowsWithData.appendChild(trNou1);
			var tdNou1 = document.createElement("td");
			tdNou1.innerHTML = RecyclerName[race-1];
			trNou1.appendChild(tdNou1);
			var tdNou2 = document.createElement("td");
			tdNou2.innerHTML = Math.ceil((Metal+Crystal+DeuTri)RecyclerPayLoad[race-1]).toString();
			trNou1.appendChild(tdNou2);
			if (race == 1) {
				var tdNou3 = document.createElement("td");
				tdNou3.innerHTML = RecyclerName[race-1+3];
				trNou1.appendChild(tdNou3);
				var tdNou4 = document.createElement("td");
				tdNou4.innerHTML = Math.ceil((Metal+Crystal+DeuTri)RecyclerPayLoad[race-1+3]).toString();
				trNou1.appendChild(tdNou4);
			}
		}
	}
	var isDebris = document.location.toString().match(/\debris\b/g);
	if (isDebris){
		var divDebrisInfo = document.getElementById("mapDialog_debrisInfo");
		if (divDebrisInfo){
			var RowsWithData = divCometInfo.getElementsByTagName("tbody")[0];
			var Metal = document.getElementById("orbInfo_resourceDebrisMetal").innerHTML.match(/\d+/g).join("");
			var Crystal = document.getElementById("orbInfo_resourceDebrisCrystal").innerHTML.match(/\d+/g).join("");
			
			var trNou1 = document.createElement("tr");
			RowsWithData.appendChild(trNou1);
			var tdNou1 = document.createElement("td");
			tdNou1.innerHTML = RecyclerName[race-1];
			trNou1.appendChild(tdNou1);
			var tdNou2 = document.createElement("td");
			tdNou2.innerHTML = Math.ceil((Metal+Crystal+DeuTri)RecyclerPayLoad[race-1]).toString();
			trNou1.appendChild(tdNou2);
			if (race == 1) {
				var tdNou3 = document.createElement("td");
				tdNou3.innerHTML = RecyclerName[race-1+3];
				trNou1.appendChild(tdNou3);
				var tdNou4 = document.createElement("td");
				tdNou4.innerHTML = Math.ceil((Metal+Crystal+DeuTri)RecyclerPayLoad[race-1+3]).toString();
				trNou1.appendChild(tdNou4);
			}			
		}
	}

}

catch(e){
alert(e);
}
}

showOnRecycle();