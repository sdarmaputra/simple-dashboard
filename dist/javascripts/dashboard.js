$(document).ready(function() {
	$('ul.sidebar-navigation li.has-dropdown').on('click', function(event) {
		handleSidebarDropdown(event.currentTarget);
	})

	$('.main-area-expand-btn').on('click', function() {
		handleMainAreaExpand();
	})
});

function handleSidebarDropdown(element) {
	if ($(element).hasClass('opened')) {
		$(element).removeClass('opened');
		$(element).find('ul').css('height', '0');
	} else {
		var itemHeight = ($(element).find('ul li').css('height')).replace('px', '');
		var itemCount = $(element).find('ul li').length;
		$(element).addClass('opened');
		$(element).find('ul').css('height', (itemHeight*itemCount) + 'px');
	}
}

function handleMainAreaExpand() {
	var main = $('.main');
	var sidebar = $('.sidebar');
	if (main.hasClass('expanded')) {
		main.removeClass('expanded');
		sidebar.removeClass('collapsed');
	} else {
		main.addClass('expanded');
		sidebar.addClass('collapsed');
	}
}