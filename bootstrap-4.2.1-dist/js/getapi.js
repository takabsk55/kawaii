$(document).ready(function() {
    $.ajax({
        // Internet Chuck Norris DB 
        dataType: 'json',
        url: "https://kvecfz48db.execute-api.ap-northeast-1.amazonaws.com/v1/hosoyama/comics",
    }).then(function(data) {
        for (var i=0; i<data.length; i++){
	    $('.name'+String(i)).append(data[i].title);	    
	    $('.pub'+String(i)).append(data[i].publisher);	    
	    $('.pic'+String(i)).attr('src',data[i].cover);	    
	    
	}     
        // html append
       
       
    });
});
