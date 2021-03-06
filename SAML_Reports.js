/*
*		SAML - Reports
*
*
*/


function CalcShipCapacity(pos)
{
  var res = GetPayLoad(GetClassic("/help/ship/"+pos));
  if (isNaN(res))
     res = 0;
  return res;
}

function ShowReportPercent()
{
        var isReport = document.location.toString().match(/\breport\b/g);
	if (isReport)
	{
          try
          {
           //trying to fix some UI errors
           var badDiv = document.getElementsByClassName('filter')[0];
           badDiv.setAttribute('style', 'margin-left:25px');
           
           var reportDiv = document.getElementsByClassName('content')[0];
           var loot = reportDiv.getElementsByTagName('p')[0];
           var recycleLoot = reportDiv.getElementsByTagName('h3')[1];
           var resources = 0;
           if (recycleLoot != null)
           {
               resources = recycleLoot.textContent.match(/\d+/g);
           }
           else
               resources = loot.textContent.match(/\d+/g);
           var total = eval(resources.join("+"));
           var myFleet = reportDiv.getElementsByClassName('colorWhite width100')[0];
           var capacity = 0;
           for (var i = 0; i < 12; i++) {
                    if (parseInt(myFleet.rows[2].cells[i+1].innerHTML) > 0)
	               capacity += myFleet.rows[2].cells[i+1].innerHTML * CalcShipCapacity(shipIDs[race-1][i]);
           }

           if (recycleLoot != null)
           {
              switch(race)
              {
                  case 1:
                       //terani
                       capacity = myFleet.rows[2].cells[10].innerHTML * CalcShipCapacity(shipIDs[race-1][9]);
                       capacity += myFleet.rows[2].cells[11].innerHTML * CalcShipCapacity(shipIDs[race-1][10]);
                  break;
                  case 2:
                       //titani
                       capacity = myFleet.rows[2].cells[11].innerHTML * CalcShipCapacity(shipIDs[race-1][10]);
                  break;
                  case 3:
                       //xen
                       capacity = myFleet.rows[2].cells[11].innerHTML * CalcShipCapacity(shipIDs[race-1][10]);
                  break;
              }
           }

           var loss = " Total losses = " + parseFloat(capacity-total) + " ";
           if (recycleLoot != null)
           {

               if (parseFloat(capacity-total) <= 0)
                   recycleLoot.innerHTML += "<div class='fontColorRace fontBold fontSize10'> [ " + Math.round(100 * total / capacity) + "% fleet loaded ]</div>";
               else
                   recycleLoot.innerHTML += "<div class='fontColorRace fontBold fontSize10'> [ " + Math.round(100 * total / capacity) + "% fleet loaded ]<br/>[" + loss + " ]</div>";
           }
           else
           {
               if (parseFloat(capacity-total) <= 0)
                   loot.innerHTML += "<div class='fontColorRace fontBold'> [ " + Math.round(100 * total / capacity) + "% fleet loaded ]</div>";
               else
                   loot.innerHTML += "<div class='fontColorRace fontBold'> [ " + Math.round(100 * total / capacity) + "% fleet loaded ]<br/>[" + loss + " ]</div>";
           }
          }
          catch(e)
          {
            window.status = e;
          }
        }
}



ShowReportPercent();
