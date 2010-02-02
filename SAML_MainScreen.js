/*
*		SAML - MainScreen
*
*
*/

function ShowResources()
{	
	try 
	{		
		var metalDiv = document.getElementsByClassName('resource interface_icon_medium_metal')[0];
		var cristalDiv = document.getElementsByClassName('resource interface_icon_medium_crystal')[0];
		var deutDiv = document.getElementsByClassName('resource interface_icon_medium_deuterium')[0];						
		
		var table = document.getElementsByClassName('resourceInfoTable')[0];
		if (table){
			var m = document.createElement('div');
			m.setAttribute('id','divMetal');
			m.setAttribute('class', 'count fontCenter fontColorRace fontCalibri fontSize8 fontBold margin');
			m.setAttribute('style', 'position: absolute; top: 12px; width: 165px;');
			m.innerHTML = "(" + metalDiv.getElementsByTagName("div")[0].innerHTML + ") /h | " + table.rows[2].cells[0].innerHTML;
			document.getElementById('resourceBar').appendChild(m);			
			
			var d = document.createElement('div');
			d.setAttribute('id','divCrystal');
			d.setAttribute('class', 'count fontCenter fontColorRace fontCalibri fontSize8 fontBold margin');
			d.setAttribute('style', 'position: absolute; top: 12px; margin-left:155px; width: 200px;');
			d.innerHTML = "(" + cristalDiv.getElementsByTagName("div")[0].innerHTML + ") /h | " + table.rows[2].cells[2].innerHTML;
			document.getElementById('resourceBar').appendChild(d);
			
			var dt = document.createElement('div');
			dt.setAttribute('id','divDeuteriu');
			dt.setAttribute('class', 'count fontCenter fontColorRace fontCalibri fontSize8 fontBold');
			dt.setAttribute('style', 'position: absolute; margin-left:375px; top: 12px;');
			dt.innerHTML = "(" + deutDiv.getElementsByTagName("div")[0].innerHTML + ") /h | " + table.rows[2].cells[4].innerHTML;
			document.getElementById('resourceBar').appendChild(dt);	
		}
	}
	catch(e)
	{
		window.status = e;
	}	
}

function ShowFleetCount()
{
	try
	{
		var outAtt = document.getElementById('outgoingAttackContent');		
		if (outAtt)
		{
			var dt = document.createElement('div');
			dt.setAttribute('id','outAttCount');
			dt.setAttribute('class', 'fontColorWhite fontCalibri fontSize14 fontBold floatRight');
			dt.setAttribute('style', 'position: absolute; margin-right:5px; top: 5px; right:16px;');
			dt.innerHTML = "(" + outAtt.getElementsByTagName('a').length + ")";
			document.getElementById('outgoingAttackContent').appendChild(dt);		
		}
		var incSupp = document.getElementById('incomingSupportContent');		
		if (incSupp)
		{
			var dtincSupp = document.createElement('div');
			dtincSupp.setAttribute('id','dtincSupp');
			dtincSupp.setAttribute('class', 'fontColorWhite fontCalibri fontSize14 fontBold floatRight');
			dtincSupp.setAttribute('style', 'position: absolute; margin-right:5px; top: 5px; right:16px;');
			dtincSupp.innerHTML = "(" + incSupp.getElementsByTagName('a').length + ")";
			document.getElementById('incomingSupportContent').appendChild(dtincSupp);		
		}
		var outSupp = document.getElementById('outgoingSupportContent');
		if (outSupp)
		{
			var dtoutSupp = document.createElement('div');
			dtoutSupp.setAttribute('id','outSupp');
			dtoutSupp.setAttribute('class', 'fontColorWhite fontCalibri fontSize14 fontBold floatRight');
			dtoutSupp.setAttribute('style', 'position: absolute; margin-right:5px; top: 5px; right:16px;');
			dtoutSupp.innerHTML = "(" + outSupp.getElementsByTagName('a').length + ")";
			document.getElementById('outgoingSupportContent').appendChild(dtoutSupp);	
		}			
		var incAtt = document.getElementById('incomingAttackContent');	
		if (incAtt)
		{
			var dtincAtt = document.createElement('div');
			dtincAtt.setAttribute('id','incAtt');
			dtincAtt.setAttribute('class', 'fontColorWhite fontCalibri fontSize14 fontBold floatRight');
			dtincAtt.setAttribute('style', 'position: absolute; margin-right:5px; top: 5px; right:16px;');
			dtincAtt.innerHTML = "(" + incAtt.getElementsByTagName('a').length + ")";
			document.getElementById('incomingAttackContent').appendChild(dtincAtt);		
		}
	}
	catch (e)
	{
		window.status = e;
	}
}

ShowResources();
ShowFleetCount();