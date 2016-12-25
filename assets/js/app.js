"use strict";

var Taste_Kid_URL = 'https://www.tastekid.com/api/similar';

function getDataFromApi(searchTerm,callBack) {
	var settings = {
		url: Taste_Kid_URL,
		data: {
			k: "252506-SoundTre-FAA6N6GS",
			type: "music",
			info: 1,
			limit: 20,
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
			results +=  '<p>' + item.Name + '</p>';
			results +=  '<iframe src=' + item.yUrl + '>j</iframe>';
			//results +=	'<video><source src=' + item.yUrl + 'type = "video/mp4"></video>' ;
			//results +=	'<a href="https://www.youtube.com/' + item.id.channelId + '"><button>view channel</button></a>';
		});
	}
	
	$(".results").html(results);
}


	$("#search-form").submit(function(event) {
		event.preventDefault();
		var query = $(this).find(".js-query").val();
		getDataFromApi(query, displayTasteKidSearchData);
		$("input[name='search']").val(" ");
	});


