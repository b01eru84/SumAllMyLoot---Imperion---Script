/*
*		SAML - Recycle
*
*
*/

function myFunction(e){
	//alert(1);	
	var mapInfo = document.getElementById('mapInfo');
	alert(mapInfo.className);
}

function showOnRecycle(){
	var isMap = document.location.toString().match(/\map\b/g);	
	if (isMap){		
		var mapgalaxy = document.getElementById('mapGalaxy');
		if (mapgalaxy){			
			var planets = mapgalaxy.getElementsByTagName("img");			
			for (var i=0;i<planets.length;i++){				
				planets[i].addEventListener ("mouseover",myFunction,false);
			}
		}
		//el.addEventListener ("mouseover",myFunction,false);
	}
	
	
	var issComet = document.location.toString().match(/(comet)/g);
	if (issComet){
		var divCometInfo = document.getElementById("mapDialog_cometInfo");
		if (divCometInfo){
			var RowsWithData = divCometInfo.getElementsByTagName("tbody")[0];
			var Metal = document.getElementById("orbInfo_resourceCometMetal").innerHTML.match(/\d+/g).join("");
			var Crystal = document.getElementById("orbInfo_resourceCometCrystal").innerHTML.match(/\d+/g).join("");
			var DeuTri = document.getElementById("orbInfo_resourceCometDeuTri").innerHTML.match(/\d+/g).join("");
			for (var i = 3;i<RowsWithData.rows.length;i++){
				RowsWithData.removeChild(RowsWithData.rows[i]);
			}
			//test();
			var trNou1 = document.createElement("tr");
			RowsWithData.appendChild(trNou1);
			var tdNou1 = document.createElement("td");
			tdNou1.innerHTML = RecyclerName[race-1];
			trNou1.appendChild(tdNou1);
			var tdNou2 = document.createElement("td");
			tdNou2.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)+parseFloat(DeuTri)) / parseFloat(RecyclerPayLoad[race-1])).toString();
			trNou1.appendChild(tdNou2);
			if (race == 1) {
				var tdNou3 = document.createElement("td");
				tdNou3.innerHTML = RecyclerName[race-1+3];
				trNou1.appendChild(tdNou3);
				var tdNou4 = document.createElement("td");
				tdNou4.innerHTML = Math.ceil((parseFloat(Metal)+parseFloat(Crystal)+parseFloat(DeuTri)) / parseFloat(RecyclerPayLoad[race-1+3])).toString();
				trNou1.appendChild(tdNou4);
			}
		}
	}
	// var isDebris = document.location.toString().match(/\debris\b/g);
	// if (isDebris){
		// var divDebrisInfo = document.getElementById("mapDialog_debrisInfo");
		// if (divDebrisInfo){
			// var RowsWithData = divCometInfo.getElementsByTagName("tbody")[0];
			// var Metal = document.getElementById("orbInfo_resourceDebrisMetal").innerHTML.match(/\d+/g).join("");
			// var Crystal = document.getElementById("orbInfo_resourceDebrisCrystal").innerHTML.match(/\d+/g).join("");
			
			// var trNou1 = document.createElement("tr");
			// RowsWithData.appendChild(trNou1);
			// var tdNou1 = document.createElement("td");
			// tdNou1.innerHTML = RecyclerName[race-1];
			// trNou1.appendChild(tdNou1);
			// var tdNou2 = document.createElement("td");
			// tdNou2.innerHTML = Math.ceil((Metal+Crystal+DeuTri)RecyclerPayLoad[race-1]).toString();
			// trNou1.appendChild(tdNou2);
			// if (race == 1) {
				// var tdNou3 = document.createElement("td");
				// tdNou3.innerHTML = RecyclerName[race-1+3];
				// trNou1.appendChild(tdNou3);
				// var tdNou4 = document.createElement("td");
				// tdNou4.innerHTML = Math.ceil((Metal+Crystal+DeuTri)RecyclerPayLoad[race-1+3]).toString();
				// trNou1.appendChild(tdNou4);
			// }			
		// }
	// }

// }

}

//document.addEventListener ("click", showOnRecycle, false);
//showOnRecycle();