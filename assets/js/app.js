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
	/*var results = ' ';
	if (data.items) {
		data.items.forEach(function(item) {
			results +=  '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><h3 class="title">' + item.snippet.title + '</h3></a>';
			results +=	'<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"><img src="' + item.snippet.thumbnails.medium.url + '"></a><br>';
			results +=	'<a href="https://www.youtube.com/' + item.id.channelId + '"><button>view channel</button></a>';
		});
	}
	else {
		results += '<p> No Results </p>';
	}
	$(".results").html(results);*/
}


	$("#search-form").submit(function(event) {
		event.preventDefault();
		var query = $(this).find(".js-query").val();
		getDataFromApi(query, displayTasteKidSearchData);
		$("input[name='search']").val(" ");
	});


