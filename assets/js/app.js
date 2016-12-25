"use strict";

var Taste_Kid_URL = 'https://www.tastekid.com/api/similar';

function getDataFromApi(searchTerm,callBack) {
	var settings = {
		url: Taste_Kid_URL,
		data: {
			k: "252506-SoundTre-FAA6N6GS",
			type: "music",
			info: 1,
			limit: 12,
			callback: 'jsonp',
			q: searchTerm
	},
		dataType: 'jsonp',
		type: "GET",
		success: callBack
	};
	$.ajax(settings);
}

function displayTasteKidSearchData(data) {
	console.log(data);
	var results = ' ';
	
	 if (data.Similar.Results.length === 0) {
		results += '<p> No Results </p>';
	}

	else {
		data.Similar.Results.forEach(function(item) { 
			results +=  '<div class="row"><div class="col-6"><p>' + item.Name + '</p>'+
			  			'<iframe src=' + item.yUrl + ' frameborder = "0" height="" width="" allowfullscreen>#document</iframe></div>'+
			  			'<div class="col-6 bio">' + item.wTeaser.substring(0,375) + '<a class="read-more" href=' + item.wUrl + '> ...read more</a></div></div>';
			//results +=  '<p class="bio">' + item.wTeaser + '</p>';
			//results +=	'<video><source src=' + item.yUrl + 'type = "video/mp4"></video>' ;
			//results +=	'<a href="https://www.youtube.com/' + item.id.channelId + '"><button>view channel</button></a>';
		});
	}
	
	$(".matches").html(results);
}


	$("#search-form").submit(function(event) {
		event.preventDefault();
		var query = $(this).find(".js-query").val();
		getDataFromApi(query, displayTasteKidSearchData);
		$("input[name='search']").val(" ");
	});

// let youtubeURL = NSURL(string: "https://www.youtube.com/embed/YQHsXMglC9A?autoplay=1") ;
// let youtubeRequest = NSMutableURLRequest(URL: youtubeURL!); 
// youtubeRequest.setValue("https://www.youtube.com", forHTTPHeaderField: "Referer"); 
// webView.loadRequest(youtubeRequest);
