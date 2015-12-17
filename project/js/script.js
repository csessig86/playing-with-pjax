// The first parameter are the links that will open up with HTML content of the subpages
// The second parameter is the container within the page where the content from these HTML files will be place

$(document).ready(function() {
	$(document).pjax('.navbar a', '#pjax-container')

	$('#refresh-button').click(function() {
		$.pjax.reload('#pjax-container')
	});
// Close doc ready
});	