$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('#tweetForm').submit(function(e){
  	var formData = $('#tweetForm').serialize();

  	e.preventDefault();
  	$(this).prop('disabled', true);
  	$('#loadingMessage').show();
  	// debugger
  	$.ajax({
  		type: "POST",
  		url: "/tweet/new",
  		data: formData,
  		success: function(response){
  		  alert('success');
  		  $('#userTweets').show();
  		  $('#tweetsAll').html(response);
  		},
  		error: function(){
  		  alert('error!');	
  		},
  		complete: function(){
  		  alert('completed!');
  		  $(this).prop('disabled', false);
  		  $('#loadingMessage').hide();
  		},
  	});
  });

});
