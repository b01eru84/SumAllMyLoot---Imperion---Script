/*
*		SAML - MainScreen
*
*
*/



function ShowMarketPlus()
{
	var isMarket = document.location.toString().match(/\bmarket\b/g) ||
		document.location.toString().substr(document.location.toString().length - 3, 3)=="450";
	if (isMarket)
	{
		try
		{				
			var atable = document.getElementsByClassName("fieldSet floatLeft")[0].getElementsByTagName("tbody")[0];			
			var theTable = atable.getElementsByTagName("tbody")[0];
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
			window.status = e;
			//alert(e);
		}
	}

}

function metalLinkClick()
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	var table = document.getElementsByClassName("fieldSet floatLeft")[0];
	var theTable = table.rows[1].cells[1].childNodes[0];
	var metalInput = document.getElementById('resourceInputR1');
	var currValue = parseInt(metalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = parseInt(currValue + parseInt(maxTraderCap));
	metalInput.value = newValue;
	calculateTraders(metalInput);
}catch(e){window.status = e;}
}

function metalMinusLinkClick()
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	var table = document.getElementsByClassName("fieldSet floatLeft")[0];
	var theTable = table.rows[1].cells[1].childNodes[0];
	var metalInput = document.getElementById('resourceInputR1');
	var currValue = parseInt(metalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = Math.max(0, parseInt(currValue - parseInt(maxTraderCap)));
	metalInput.value = newValue;
	calculateTraders(metalInput);
}catch(e){window.status = e;}
}

function crystalLinkClick()
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	var table = document.getElementsByClassName("fieldSet floatLeft")[0];
	var theTable = table.rows[1].cells[1].childNodes[0];
	var crystalInput = document.getElementById('resourceInputR2');
	var currValue = parseInt(crystalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = parseInt(currValue + parseInt(maxTraderCap));
	crystalInput.value = newValue;
	calculateTraders(crystalInput);
}catch(e){window.status = e;}
}

function crystalMinusLinkClick()
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	var table = document.getElementsByClassName("fieldSet floatLeft")[0];
	var theTable = table.rows[1].cells[1].childNodes[0];
	var crystalInput = document.getElementById('resourceInputR2');
	var currValue = parseInt(crystalInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = Math.max(0, parseInt(currValue - parseInt(maxTraderCap)));
	crystalInput.value = newValue;
	calculateTraders(crystalInput);
}catch(e){window.status = e;}
}

function deutLinkClick()
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	var table = document.getElementsByClassName("fieldSet floatLeft")[0];
	var theTable = table.rows[1].cells[1].childNodes[0];
	var deutInput = document.getElementById('resourceInputR3');
	var currValue = parseInt(deutInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = parseInt(currValue + parseInt(maxTraderCap));
	deutInput.value = newValue;
	calculateTraders(deutInput);
}catch(e){window.status = e;}
}

function deutMinusLinkClick()
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	var table = document.getElementsByClassName("fieldSet floatLeft")[0];
	var theTable = table.rows[1].cells[1].childNodes[0];
	var deutInput = document.getElementById('resourceInputR3');
	var currValue = parseInt(deutInput.value);
	if (isNaN(currValue))
		currValue = 0;
	var newValue = Math.max(0, parseInt(currValue - parseInt(maxTraderCap)));
	deutInput.value = newValue;
	calculateTraders(deutInput);
}catch(e){window.status = e;}
}

function calculateTraders(currObj)
{
try{
	var marketDiv = document.getElementById('market');					
	var maxTraderCap = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[1].cells[0].innerHTML.match(/\d+/g).join("");
	//var marketDiv = document.getElementById('market');					
	var availTraders = marketDiv.getElementsByTagName("table")[0].getElementsByTagName("tbody")[0].rows[0].cells[2].getElementsByTagName("div")[0].innerHTML.match(/\d+/g)[0];
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
}catch(e){window.status = e;}
}

ShowMarketPlus();