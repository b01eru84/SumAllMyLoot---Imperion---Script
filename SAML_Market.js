/*
*		SAML - MainScreen
*
*
*/

var marketDiv = document.getElementById('market');					
var maxTraderCap = marketDiv.children[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");

function ShowMarketPlus()
{
	var isMarket = document.location.toString().match(/\bmarket\b/g);
	if (isMarket)
	{
		try
		{						
			var table = document.forms[0].children[2];
			var theTable = table.rows[1].cells[1].children[0];			
			//coloana +
			theTable.rows[0].insertCell(-1);
			theTable.rows[1].insertCell(-1);
			theTable.rows[2].insertCell(-1);
			//coloana -
			theTable.rows[0].insertCell(-1);
			theTable.rows[1].insertCell(-1);
			theTable.rows[2].insertCell(-1);
			
			theTable.insertRow(-1);
			
			createEl({n: 'a', a: {'@class': 'epToggle expandIcon floatRight interface_element_expand_icon', '@id': 'metalPlus', '@style':				 'margin:5px; cursor: pointer'}, c: [ ],
			evl: {type: 'click', f: metalLinkClick, bubble: true}}, theTable.rows[0].cells[2]);
			
			createEl({n: 'a', a: {'@class': 'epToggle expandIcon floatRight interface_element_expand_icon', '@id': 'crystalPlus', '@style':				   'margin:5px; cursor: pointer'}, c: [ ],
			evl: {type: 'click', f: crystalLinkClick, bubble: true}}, theTable.rows[1].cells[2]);
			
			createEl({n: 'a', a: {'@class': 'epToggle expandIcon floatRight interface_element_expand_icon', '@id': 'deutPlus', '@style':				'margin:5px; cursor: pointer'}, c: [ ],
			evl: {type: 'click', f: deutLinkClick, bubble: true}}, theTable.rows[2].cells[2]);
			
			createEl({n: 'a', a: {'@class': 'epToggle expandIcon floatRight interface_element_collapse_icon', '@id': 'metalMinus', '@style':				 'margin:5px; cursor: pointer; display: block;'}, c: [ ],
			evl: {type: 'click', f: metalMinusLinkClick, bubble: true}}, theTable.rows[0].cells[3]);
			
			createEl({n: 'a', a: {'@class': 'epToggle expandIcon floatRight interface_element_collapse_icon', '@id': 'crystalMinus', '@style':				   'margin:5px; cursor: pointer'}, c: [ ],
			evl: {type: 'click', f: crystalMinusLinkClick, bubble: true}}, theTable.rows[1].cells[3]);
			
			createEl({n: 'a', a: {'@class': 'epToggle expandIcon floatRight interface_element_collapse_icon', '@id': 'deutMinus', '@style':				'margin:5px; cursor: pointer'}, c: [ ],
			evl: {type: 'click', f: deutMinusLinkClick, bubble: true}}, theTable.rows[2].cells[3]);
						
		}
		catch (e)
		{
			alert(e);
		}
	}

}

function metalLinkClick()
{
	var table = document.forms[0].children[2];
	var theTable = table.rows[1].cells[1].children[0];
	var metalInput = document.getElementById('resourceInputR1');
	var currValue = parseInt(metalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = parseInt(currValue + parseInt(maxTraderCap));
	metalInput.value = newValue;
	calculateTraders(metalInput);
}

function metalMinusLinkClick()
{
	var table = document.forms[0].children[2];
	var theTable = table.rows[1].cells[1].children[0];
	var metalInput = document.getElementById('resourceInputR1');
	var currValue = parseInt(metalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = Math.max(0, parseInt(currValue - parseInt(maxTraderCap)));
	metalInput.value = newValue;
	calculateTraders(metalInput);
}

function crystalLinkClick()
{
	var table = document.forms[0].children[2];
	var theTable = table.rows[1].cells[1].children[0];
	var crystalInput = document.getElementById('resourceInputR2');
	var currValue = parseInt(crystalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = parseInt(currValue + parseInt(maxTraderCap));
	crystalInput.value = newValue;
	calculateTraders(crystalInput);
}

function crystalMinusLinkClick()
{
	var table = document.forms[0].children[2];
	var theTable = table.rows[1].cells[1].children[0];
	var crystalInput = document.getElementById('resourceInputR2');
	var currValue = parseInt(crystalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = Math.max(0, parseInt(currValue - parseInt(maxTraderCap)));
	crystalInput.value = newValue;
	calculateTraders(crystalInput);
}

function deutLinkClick()
{
	var table = document.forms[0].children[2];
	var theTable = table.rows[1].cells[1].children[0];
	var deutInput = document.getElementById('resourceInputR3');
	var currValue = parseInt(deutInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = parseInt(currValue + parseInt(maxTraderCap));
	deutInput.value = newValue;
	calculateTraders(deutInput);
}

function deutMinusLinkClick()
{
	var table = document.forms[0].children[2];
	var theTable = table.rows[1].cells[1].children[0];
	var deutInput = document.getElementById('resourceInputR3');
	var currValue = parseInt(deutInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = Math.max(0, parseInt(currValue - parseInt(maxTraderCap)));
	deutInput.value = newValue;
	calculateTraders(deutInput);
}

function calculateTraders(currObj)
{
	var marketDiv = document.getElementById('market');					
	var availTraders = marketDiv.children[0].rows[0].cells[2].children[0].innerHTML.match(/\d+/g)[0];
	var metalInput = parseInt(document.getElementById('resourceInputR1').value);
	var crystalInput = parseInt(document.getElementById('resourceInputR2').value);
	var deutInput = parseInt(document.getElementById('resourceInputR3').value);
	if (isNaN(metalInput))
		metalInput = 0;
	if (isNaN(crystalInput))
		crystalInput = 0;
	if (isNaN(deutInput))
		deutInput = 0;
	var totalAmount = parseInt(metalInput) + parseInt(crystalInput) + parseInt(deutInput);
	var maxLoad = parseInt(availTraders) * parseInt(maxTraderCap);
	if (totalAmount > maxLoad)
	{
		if (currObj != null)
			currObj.setAttribute('style', 'color: #DC0A0A; font-weight: bold;');
	}
	else
	{
		document.getElementById('resourceInputR1').setAttribute('style', '');
		document.getElementById('resourceInputR2').setAttribute('style', '');
		document.getElementById('resourceInputR3').setAttribute('style', '');
	}		
}

ShowMarketPlus();