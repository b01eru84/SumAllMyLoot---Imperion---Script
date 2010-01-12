/*
*		SAML - MainScreen
*
*
*/



/*

<div style="z-index: 10100 ! important; top: 110px; right: 155px; width: 150px; height:100px; display: block;" class="fontLeft dialog" id="dialog">
				<div class="tLeft interface_dialog_tLeft">
					<div style="background-position: right center;" class="tRight bgNoRepeat interface_dialog_tRight"/>
				</div>
				<div class="mLeft bgYRepeat interface_dialog_mLeft">
					<div class="mRight bgCenterRight bgYRepeat interface_dialog_mRight">
						<div class="content" id="dialogContent"><div style="display: block;">
            	<div style="padding: 5px; width: 510px;">
					<h2 class="fontSize14 fontBold">Productie</h2>
					<table class="resourceInfoTable">						
						<tbody>
							
						</tbody>
					</table>
				</div>
			</div></div>
					</div>
				</div>
				<div class="bLeft interface_dialog_bLeft">
					<div class="bRight bgNoRepeat bgCenterRight interface_dialog_bRight"/>
				</div>
			</div>

*/

function ShowMarketPlus()
{
	var isMarket = document.location.toString().match(/\bmarket\b/g);
	if (isMarket)
	{
		alert(document.forms["formTrade"].childern[1]);
	}

}

ShowMarketPlus();