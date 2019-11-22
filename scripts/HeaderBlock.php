<!-- This is the header block for each page -->
<table class="chocolate white label" width="100%">
<tr><td width=20><img src="../images/leftCorner.jpg" onclick="window.location.replace('../Home/Home.php');"></img></td> 
<td width=125>
	<select id="userid" name="userid" form="form" onchange="useridChanged();">
	<option value="Jaden" <?php if($_SESSION['userid']=='Jaden') echo 'selected'?> >Jaden</option> 
	<option value="Bri" <?php if($_SESSION['userid']=='Bri') echo 'selected'?> >Bri</option> 
	<option value="Inayat" <?php if($_SESSION['userid']=='Inayat') echo 'selected'?> >Inayat</option> 
	</select>
</td>
<td><B><?php echo $_SESSION['topic'];?></td>
<td><img src="../images/rightCorner.jpg" onclick="alert(\'coming soon...\');"></img></td></tr>
</table>
