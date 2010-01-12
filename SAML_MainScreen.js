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
		
		var m = document.createElement('div');
		m.setAttribute('id','divMetal');
		m.setAttribute('class', 'count fontCenter fontColorRace fontCalibri fontSize8 fontBold margin');
		m.setAttribute('style', 'position: absolute; top: 12px; width: 165px;');
		m.innerHTML = "(" + metalDiv.children[0].innerHTML + ") /h | " + table.rows[2].cells[0].innerHTML;
		document.getElementById('resourceBar').appendChild(m);			
		
		var d = document.createElement('div');
		d.setAttribute('id','divCrystal');
		d.setAttribute('class', 'count fontCenter fontColorRace fontCalibri fontSize8 fontBold margin');
		d.setAttribute('style', 'position: absolute; top: 12px; margin-left:155px; width: 200px;');
		d.innerHTML = "(" + cristalDiv.children[0].innerHTML + ") /h | " + table.rows[2].cells[2].innerHTML;
		document.getElementById('resourceBar').appendChild(d);
		
		var dt = document.createElement('div');
		dt.setAttribute('id','divDeuteriu');
		dt.setAttribute('class', 'count fontCenter fontColorRace fontCalibri fontSize8 fontBold');
		dt.setAttribute('style', 'position: absolute; margin-left:375px; top: 12px;');
		dt.innerHTML = "(" + deutDiv.children[0].innerHTML + ") /h | " + table.rows[2].cells[4].innerHTML;
		document.getElementById('resourceBar').appendChild(dt);	
	}
	catch(e)
	{
		window.status = e;
	}	
}

ShowResources();