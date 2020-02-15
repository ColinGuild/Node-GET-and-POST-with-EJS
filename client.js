

$( document ).ready(function() {
	var frm=$('#me');
   $('#me').submit(function(e){
	   e.preventDefault();

	   console.log(frm.attr('action'));
		$.ajax({
			url: "/data", 
			data: $("#me").serialize(), 
			type: "POST", 
			dataType: 'json',
			success: function (e) {
            console.log(JSON.stringify(e));
			 $('#hello').html(<p>data</p>);
			}
		});
		
		
   });	   
});


