"use strict";

var Taste_Kid_URL = 'https://www.tastekid.com/api/similar';

function getDataFromApi(searchTerm,callBack) {
	var settings = {
		url: Taste_Kid_URL,
		data: {
			k: "252506-SoundTre-FAA6N6GS",
			type: "music",
			info: 1,
			limit: 50,
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
	var results = ' ';
	
	 if (data.Similar.Results.length === 0) {
		results += '<div class="container">'+ 
						'<div class="row">'+
 							'<div class="col-6 no-results">'+
  								'<p>sorry, we don\'t know them, try again</p>'+
  							'</div>'+
						'</div>'+
					'</div>';
	}

	else {
		data.Similar.Results.forEach(function(item) { 
			results +=  '<div class="row matches"><div class="col-6"><div class="name-video"><p class="name">' + item.Name + '</p>'+
			  			'<iframe src=' + item.yUrl + ' frameborder = "0" height="" width="" allowfullscreen>#document</iframe></div></div>'+
			  			'<div class="col-6 "><div class="bio">' + item.wTeaser.substring(0,375) + ' <a class="read-more" href=' + item.wUrl + '>...read more</a></div></div></div>';
		});
	}
	
	$(".container").html(results);
}


	$("#search-form").submit(function(event) {
		event.preventDefault();
		var query = $(this).find(".js-query").val();
		getDataFromApi(query, displayTasteKidSearchData);
		$("input[name='search']").val(" ");
	});

	$(function () {
    $("div").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});


