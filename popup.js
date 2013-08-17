$(document).ready(function () {


	if ($('#ratchetswitch').is(':checked')) {
	    chrome.tabs.executeScript(null,{
	          code:"document.body.style.backgroundColor='red'"
	        });
		
	    
	} else {
		// Do nothing
	} 
}