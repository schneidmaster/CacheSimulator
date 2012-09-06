function input() {
	// Get the input from the text input field
	var newInput = document.getElementById('inputValue').value;
	
	// Clear the text input field
	document.getElementById('inputValue').value = "";
	
	// Refocus on the input field
	document.getElementById('inputValue').focus();
	
	// Check if the address is in the right range, right length, and is a number
	if(newInput < 0 || newInput > 63 || isNaN(newInput) || newInput.length < 2)
	{
		alert("Error: Invalid memory address \"" + newInput + "\".");
		return;
	}
	
	// Unhighlight the memory
	for(var i = 0; i < 64; i++)
	{
		// If i < 10, we need to add a 0 to the front, since document IDs all have
		// two digits
		if(i < 10)
		{
			i = "0" + i;
		}
		
		// Set the cell to normal colors
		document.getElementById(i).style.backgroundColor = "#ffffff";
		document.getElementById(i).style.color = "#000000";
	}
	
	// Unhighlight the cache
	for(var i = 0; i < 8; i++)
	{
		var cacheId = "cache" + i;
		
		// Set the cell to normal colors
		document.getElementById(cacheId).style.backgroundColor = "#ffffff";
		document.getElementById(cacheId).style.color = "#000000";
	}
	
	// Highlight the memory value
	document.getElementById(newInput).style.backgroundColor = "#000000";
	document.getElementById(newInput).style.color = "#ffffff";
	
	// Check if the address is in the cache and highlight/return if so
	for(var i = 0; i < 8; i++)
	{
		var cacheId = "cache" + i;
		
		// Check if the value is in the cache cell
		if(document.getElementById(cacheId).innerHTML == newInput)
		{
			// Highlight the cache value
			document.getElementById(cacheId).style.backgroundColor = "#000000";
			document.getElementById(cacheId).style.color = "#ffffff";
			
			// Alert the user
			document.getElementById('message').innerHTML = "Hit!";
			return;
		}
	}
	
	// If we get here, the address isn't in the cache.  So, add it to the first slot, 
	// bump the first value to the second slot, and bump the second slot out of the 
	// table.
	
	// Determine the set that the address belongs in
	if (newInput <= 15)
	{
		// Push slot 1 down to slot 2
		document.getElementById('cache1').innerHTML = document.getElementById('cache0').innerHTML;
		
		// Add new value to slot 1
		document.getElementById('cache0').innerHTML = newInput;
		
		// Alert the user
		var message = "Miss occurred. " + newInput + " added to set 0 of cache.";
		document.getElementById('message').innerHTML = message;
	}
			
	if ((newInput > 15) && (newInput <= 31))
	{
		// Push slot 1 down to slot 2
		document.getElementById('cache3').innerHTML = document.getElementById('cache2').innerHTML;
		
		// Add new value to slot 1
		document.getElementById('cache2').innerHTML = newInput;
		
		// Alert the user
		var message = "Miss occurred. " + newInput + " added to set 1 of cache.";
		document.getElementById('message').innerHTML = message;
	}
	
	if ((newInput > 31) && (newInput <= 47))
	{
		// Push slot 1 down to slot 2
		document.getElementById('cache5').innerHTML = document.getElementById('cache4').innerHTML;
		
		// Add new value to slot 1
		document.getElementById('cache4').innerHTML = newInput;
		
		// Alert the user
		var message = "Miss occurred. " + newInput + " added to set 2 of cache.";
		document.getElementById('message').innerHTML = message;
	}
			
	if (newInput > 47)
	{
		// Push slot 1 down to slot 2
		document.getElementById('cache7').innerHTML = document.getElementById('cache6').innerHTML;
		
		// Add new value to slot 1
		document.getElementById('cache6').innerHTML = newInput;
		
		// Alert the user
		var message = "Miss occurred. " + newInput + " added to set 3 of cache.";
		document.getElementById('message').innerHTML = message;
	}
}

function reset() {
	// Unhighlight the memory
	for(var i = 0; i < 64; i++)
	{
		// If i < 10, we need to add a 0 to the front, since document IDs all have
		// two digits
		if(i < 10)
		{
			i = "0" + i;
		}
		
		// Set the cell to normal colors
		document.getElementById(i).style.backgroundColor = "#ffffff";
		document.getElementById(i).style.color = "#000000";
	}
	
	// Unhighlight the cache and set each value to [Empty]
	for(var i = 0; i < 8; i++)
	{
		var cacheId = "cache" + i;
		
		// Set the cell to normal colors
		document.getElementById(cacheId).style.backgroundColor = "#ffffff";
		document.getElementById(cacheId).style.color = "#000000";
		document.getElementById(cacheId).innerHTML = "[Empty]";
	}
	
	// Clear the message div
	document.getElementById('message').innerHTML = "";
}