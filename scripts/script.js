	// Useful to debug what is being written to DOM
	function writeHtml(aStr)
	{
		console.log(aStr);
		document.write(aStr);
	}
	function drawIntegral(lb, ub) {
		if(typeof lb === "undefined") lb = "";
		if(typeof ub === "undefined") ub = "";
		document.write('<div>');
		document.write('<span class="aL bigFont">&int;</span>');
		document.write('<span class=ub>' + ub + '</span>');
		document.write('<span class=lb>' + lb + '</span>');
		document.write('</div>');
	}
	function drawVB(lb, ub) {
		if(typeof lb === "undefined") lb = "";
		if(typeof ub === "undefined") ub = "";
		document.write('<div>');
		document.write('<span class="aL bigFont">|</span>');
		document.write('<span class=ub>' + ub + '</span>');
		document.write('<span class=lb>' + lb + '</span>');
		document.write('</div>');
	}

	function drawFraction(nId,dId, nClass, dClass, nVal, dVal, retIt)
	{
		if(typeof nClass === "undefined" ) nClass = "w1";
		if(typeof dClass === "undefined" ) dClass = "w1";
		if(typeof nVal === "undefined" ) nVal = "";
		if(typeof dVal === "undefined" ) dVal = "";
		
		var htmlStr = "";

		htmlStr += "<table><tr><td style='border-bottom:solid 4px'>";
		if(nId != null )
			htmlStr += "<input  class='short " + nClass + "' id=" + nId + " onchange='itemChanged(this);'>" + nVal + "</input></td></tr>";
		else
			htmlStr += nVal + "</td></tr>";
		if(dId != null)
			htmlStr += "<tr><td><input class='short " + dClass + "' id=" + dId + " onchange='itemChanged(this);'>" + dVal + "</input></td></tr></table>";
		else
			htmlStr += "<tr><td>" + dVal + "</td></tr></table>";

		if( typeof retIt === "undefined" )
			document.write(htmlStr);
		else
			return htmlStr;
	}

	function decrementScore(anObj, msg)
	{
		alert(msg);
		var score = document.getElementById( "form.grade").value;
		score -= 5;
		document.getElementById( "form.grade").value=score;
		document.getElementById( "score").innerHTML=score;
		anObj.focus();
		return false;
	}

	function drawLoginSelect()
	{
		document.write('<?php echo "hey " ?> ');
		document.write('<select onchange="loginChanged();" id="userid" name="userid" form="form" value="<?php echo $_SESSION[\'userid\'];?>"> ');
  		document.write('<option value="Jaden">Jaden</option> ');
  		document.write('<option value="Bri">Bri</option> ');
  		document.write('<option value="IFred">Fred</option> ');
		document.write('</select>');

	}

	function drawHeader(aTopic)
	{
		writeHtml('<table class="chocolate white" width="100%"> ');
		writeHtml('<tr><td width=20><img src="../images/leftCorner.jpg" onclick="window.location.replace(\'../Home.php\');"></img></td> ');
		writeHtml('<td width=200>Hello:&nbsp;<script>drawLoginSelect();</script></td> ');
		writeHtml('<td><B><input class="chocolate white" name="topic" readonly type="text" value="' + aTopic + '"></td> ');
		writeHtml('<td><img src="../images/rightCorner.jpg" onclick="alert(\'coming soon...\');"></img></td></tr> ');
		writeHtml('</table> ');

	}