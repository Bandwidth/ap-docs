module.exports = function ($) {
	$('.articles li.chapter').each(function (i, elem) {
		var li = $(elem);
		if (li.text().indexOf('GET') > 0) {
			var newTxt = li.children().first().html().replace("GET", "<code class=\"get\">GET </code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('POST') > 0) {
			var newTxt = li.children().first().html().replace("POST", "<code class=\"post\">POST</code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('DELETE') > 0) {
			var newTxt = li.children().first().html().replace("DELETE", "<code class=\"delete\">DEL </code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('PUT') > 0) {
			var newTxt = li.children().first().html().replace("PUT", "<code class=\"put\">PUT </code>");
			li.children().first().html(newTxt);
		}
		else if (li.text().indexOf('BETA') > 0) {
			var newTxt = li.children().first().html().replace("BETA", "<code class=\"beta\">BETA </code>");
			li.children().first().html(newTxt);
		}
	});
	var title = $('title').text();

	if(title.indexOf(' · GitBook')  > 0) {
		var newTitle = title.replace(' · GitBook', '');
		$('title').text(newTitle);
	}
	$('li.chapter a:contains(FAQ)').append('<i class="icons8-open-in-window" style="float:right;"></i>');
	$('li.chapter a:contains(FAQ)').css('width','100%');
	$('.markdown-section').has('.api-method-code').css('padding-top','0px');
	$('a[href*="docs/phone-numbers"]').removeAttr('target');

	return $.html();
}
