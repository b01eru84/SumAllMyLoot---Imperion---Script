/*
*		SAML - Reports
*
*
*/


function ShowReportPercent()
{
        var isReport = document.location.toString().match(/\breport\b/g);
	if (isReport)
	{
          try
          {
           var capacities = [
	                  [0, 60, 475, 330, 4000, 0, 0, 0, 2000, 20000, 500, 72],
                          [0, 0, 0, 800, 0, 0, 0, 0, 800, 16000, 1000, 3200],
	                  [0, 0, 285, 225, 180, 6400, 0, 0, 0, 0, 800, 2800]
                                                                             ];
           var reportDiv = document.getElementsByClassName('content')[0];
           var loot = reportDiv.getElementsByTagName('p')[0];
           var resources = loot.textContent.match(/\d+/g);
           var total = eval(nums.join("+"));
           var myFleet = reportDiv.getElementsByClassName('colorWhite width100')[0];

           var capacity = 0;
           for (var i = 0; i < 12; i++) {
	            capacity += myFleet.rows[2].cells[i+1].innerHTML * capacities[race][i];
           }
            loot.innerHTML += " [ " + Math.round(100 * total / capacity) + "% ]";
          }
          catch(e)
          {
            alert(e);
          }
        }


}